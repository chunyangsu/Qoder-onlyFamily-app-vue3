import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  // 动态导入 UnoCSS（ESM-only），兼容 uni-app 的 CJS 配置加载
  const UnoCSS = (await import('unocss/vite')).default

  return {
    plugins: [
      uni(),
      // UnoCSS 在 uni 插件之后
      UnoCSS(),
      // 修复 UnoCSS 导致编译产物为 .css 而非 .wxss 的问题
      {
        name: 'uni-rename-wxss',
        enforce: 'post',
        applyToEnvironment(environment) {
          return environment.config.build.lib !== undefined
        },
        generateBundle(_options: unknown, bundle: Record<string, { type: string; fileName: string }>) {
          for (const key of Object.keys(bundle)) {
            const item = bundle[key]
            if (item.type === 'asset' && item.fileName.endsWith('.css')) {
              const newFileName = item.fileName.replace(/\.css$/, '.wxss')
              item.fileName = newFileName
            }
          }
        },
      },
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
  }
})
