import js from '@eslint/js'
import tsEslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier/recommended'

export default defineConfigWithVueTs(
  // 全局忽略
  {
    ignores: ['dist/', 'node_modules/', '*.config.js', '*.config.ts', 'src/**/*.d.ts'],
  },

  // 基础 JS 推荐规则
  js.configs.recommended,

  // TypeScript 推荐规则
  ...tsEslint.configs.recommended,

  // Vue3 推荐规则 + TS 类型支持
  ...pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,

  // 自定义规则覆盖
  {
    files: ['**/*.{ts,vue}'],
    rules: {
      // Vue
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/attribute-hyphenation': ['warn', 'always'],
      'vue/v-on-event-hyphenation': ['warn', 'always'],
      'vue/component-definition-name-casing': ['warn', 'PascalCase'],
      'vue/order-in-components': 'warn',

      // TypeScript
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/no-empty-object-type': 'off',

      // 通用
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'no-unused-vars': 'off',
    },
  },

  // 关闭与 Prettier 冲突的 ESLint 规则
  eslintConfigPrettier,

  // 将 Prettier 检查作为 ESLint 规则运行
  pluginPrettier,
)
