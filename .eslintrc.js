module.exports = {
  "parser": '@typescript-eslint/parser',
  "extends": [
    "airbnb",
    // "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  "plugins": [
    '@typescript-eslint',
    "prettier",
    "import",
    "css-modules",
    "react",
    "react-hooks",
  ],
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    },
    "useJSXTextNode": true
  },
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "semi": 2
  },
  "env": {
    "browser": true
  },
  "overrides": [
    // 测试文件
    {
      files: ['*.{spec,test}.{ts,tsx}', '**/__tests__/**/*.{ts,tsx}'],
      plugins: [
        'jest',
      ],
      env: {
        jest: true,
      },
      globals: {
        page: true,
        browser: true,
        context: true,
        jestPuppeteer: true,
      },
    },
  ],
}
