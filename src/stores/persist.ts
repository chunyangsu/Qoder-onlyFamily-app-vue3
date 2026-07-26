import type { PiniaPluginContext } from 'pinia'

/** uni-app 存储适配器 */
const uniStorage = {
  getItem(key: string): string {
    return uni.getStorageSync(key) || ''
  },
  setItem(key: string, value: string): void {
    uni.setStorageSync(key, value)
  },
}

/**
 * Pinia 持久化插件（uni-app 版）
 *
 * 在 defineStore 中通过 `persist` 选项启用：
 * ```ts
 * export const useUserStore = defineStore('user', () => { ... }, {
 *   persist: {
 *     key: 'user-store',       // 存储 key，默认使用 store.$id
 *     pick: ['token', 'nickname'], // 可选：只持久化指定字段
 *   },
 * })
 * ```
 */
export function piniaPersistPlugin({ store, options }: PiniaPluginContext) {
  const persistConfig = (options as Record<string, unknown>).persist as
    | { key?: string; pick?: string[] }
    | undefined

  if (!persistConfig) return

  const storageKey = persistConfig.key ?? store.$id
  const pickFields = persistConfig.pick

  // 恢复数据
  const stored = uniStorage.getItem(storageKey)
  if (stored) {
    try {
      const data = JSON.parse(stored)
      if (pickFields) {
        const patch: Record<string, unknown> = {}
        for (const field of pickFields) {
          if (field in data) patch[field] = data[field]
        }
        store.$patch(patch)
      } else {
        store.$patch(data)
      }
    } catch {
      // 存储数据损坏，忽略
    }
  }

  // 监听变更并持久化
  store.$subscribe(
    (_mutation, state) => {
      const data = pickFields
        ? Object.fromEntries(pickFields.map((f) => [f, (state as Record<string, unknown>)[f]]))
        : { ...state }
      uniStorage.setItem(storageKey, JSON.stringify(data))
    },
    { detached: true },
  )
}
