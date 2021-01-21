
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "off",
      // 解决let被强转为const问题
      "prefer-const": 0,
      // 保存代码时缩进2个空格
      "indent": ['error', 2],
    },
  };
  