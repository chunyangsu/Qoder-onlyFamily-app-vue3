import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

/**
 * 应用全局配置 Store
 * 管理应用级全局状态
 */
export const useAppStore = defineStore(
  'app',
  () => {
  // === State ===
  const systemInfo = ref<UniApp.GetSystemInfoResult | null>(null)
  const statusBarHeight = ref(0)

  // === Getters ===
  const isDarkMode = computed(() => false)

  // === Actions ===
  /** 初始化系统信息 */
  function initSystemInfo() {
    const info = uni.getSystemInfoSync()
    systemInfo.value = info
    statusBarHeight.value = info.statusBarHeight ?? 0
  }

  return {
    systemInfo,
    statusBarHeight,
    isDarkMode,
    initSystemInfo,
  }
  },
  {
    persist: {
      key: 'app-store',
      pick: ['statusBarHeight'],
    },
  },
)
