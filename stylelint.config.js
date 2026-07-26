/** @type {import('stylelint').Config} */
export default {
  ignoreFiles: ['dist/**', 'node_modules/**'],
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
  ],
  plugins: ['stylelint-order'],
  rules: {
    // === 属性排序（CSS 属性按逻辑分组排列） ===
    'order/properties-alphabetical-order': null,
    'order/properties-order': [
      [
        // 定位
        {
          properties: [
            'position', 'top', 'right', 'bottom', 'left', 'z-index',
          ],
        },
        // 布局
        {
          properties: [
            'display', 'flex', 'flex-direction', 'flex-wrap', 'flex-flow',
            'flex-grow', 'flex-shrink', 'flex-basis', 'justify-content',
            'align-items', 'align-self', 'align-content', 'order',
            'grid', 'grid-template', 'grid-template-columns', 'grid-template-rows',
            'grid-gap', 'gap', 'column-gap', 'row-gap',
          ],
        },
        // 盒模型
        {
          properties: [
            'box-sizing', 'width', 'min-width', 'max-width',
            'height', 'min-height', 'max-height',
            'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
            'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
            'border', 'border-width', 'border-style', 'border-color', 'border-radius',
            'overflow', 'overflow-x', 'overflow-y',
          ],
        },
        // 排版
        {
          properties: [
            'font', 'font-family', 'font-size', 'font-weight', 'font-style',
            'line-height', 'letter-spacing', 'text-align', 'text-decoration',
            'text-transform', 'white-space', 'word-break', 'word-wrap',
            'color', 'vertical-align',
          ],
        },
        // 视觉
        {
          properties: [
            'background', 'background-color', 'background-image', 'background-size',
            'background-position', 'background-repeat',
            'box-shadow', 'opacity', 'outline',
            'transition', 'transform', 'animation',
          ],
        },
      ],
      { unspecified: 'bottomAlphabetical' },
    ],

    // === SCSS 规则 ===
    'scss/at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['apply', 'screen', 'responsive', 'variants'] },
    ],
    'scss/dollar-variable-pattern': null,
    'scss/selector-no-redundant-nesting-selector': true,

    // === 通用规则 ===
    'selector-class-pattern': null, // 允许任意类名格式（UnoCSS 工具类）
    'selector-type-no-unknown': [true, { ignoreTypes: ['page', 'view', 'text', 'image', 'scroll-view', 'swiper', 'input', 'button', 'navigator', 'block'] }],
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'no-descending-specificity': null, // UnoCSS 原子类不遵循优先级递减
    'declaration-block-no-redundant-longhand-properties': null,
    'shorthand-property-no-redundant-values': null,
    'rule-empty-line-before': null,
    'comment-empty-line-before': null,
    'color-function-notation': null,
    'color-function-alias-notation': null,
    'alpha-value-notation': null,
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    'selector-no-vendor-prefix': null,
    'at-rule-no-vendor-prefix': null,
    'number-max-precision': null,
  },
}
