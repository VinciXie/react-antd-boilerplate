module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:css-modules/recommended",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  "plugins": [
    "prettier",
    "import",
    "css-modules",
    "react"
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
    // ts 文件
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: [
        "css-modules",
        '@typescript-eslint/eslint-plugin'
      ],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          {argsIgnorePattern: '^_'},
        ],
        'no-unused-vars': 'off',
      },
    },
    // 测试文件
    {
      files: ['*.{spec,test}.{js,ts,tsx}', '**/__tests__/**/*.{js,ts,tsx}'],
      plugins: [
        'jest',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
