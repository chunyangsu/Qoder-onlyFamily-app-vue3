import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetUni } from '@uni-helper/unocss-preset-uni'

export default defineConfig({
  presets: [
    // uni-app 专用预设，自动处理 rpx 单位转换，兼容小程序/App 平台
    presetUni(),
  ],
  transformers: [
    // 支持 @apply、@@screen 等指令
    transformerDirectives(),
    // 支持变体组简写，如 hover:(bg-gray-400 font-medium)
    transformerVariantGroup(),
  ],
  shortcuts: [
    // 常用布局快捷方式
    {
      'flex-center': 'flex items-center justify-center',
      'flex-between': 'flex items-center justify-between',
      'flex-around': 'flex items-center justify-around',
      'flex-col-center': 'flex flex-col items-center justify-center',
    },
  ],
  theme: {
    colors: {
      primary: '#007aff',
      success: '#4cd964',
      warning: '#f0ad4e',
      error: '#dd524d',
    },
  },
})
