import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

/**
 * 用户信息 Store
 * 管理用户登录状态和基本信息
 */
export const useUserStore = defineStore(
  'user',
  () => {
  // === State ===
  const token = ref('')
  const nickname = ref('')
  const avatar = ref('')

  // === Getters ===
  const isLoggedIn = computed(() => !!token.value)

  // === Actions ===
  /** 设置登录信息 */
  function setLogin(info: { token: string; nickname: string; avatar?: string }) {
    token.value = info.token
    nickname.value = info.nickname
    avatar.value = info.avatar ?? ''
  }

  /** 清除登录状态 */
  function logout() {
    token.value = ''
    nickname.value = ''
    avatar.value = ''
  }

  return {
    token,
    nickname,
    avatar,
    isLoggedIn,
    setLogin,
    logout,
  }
  },
  {
    persist: {
      key: 'user-store',
      pick: ['token', 'nickname', 'avatar'],
    },
  },
)
