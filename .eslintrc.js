module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended"
  ],
  // add your custom rules here
  rules: {
    "nuxt/no-cjs-in-config": "off",
    "vue/comment-directive": "off",
    "quotes": [1, "double"],
    "semi": [1, "always"],
    "no-multi-spaces": ["error"],
    "max-len": ["warn", { code: 120 }],
    "no-console": ["warn"],
    "no-debugger": ["warn"],
    "no-unused-vars": "warn",
    "no-undef": "off",
    "comma-dangle": "off",
    "space-before-function-paren": [1, "never"]
  }
}
