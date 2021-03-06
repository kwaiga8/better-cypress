module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:cypress/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 6,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'import',
    'react',
    'prettier',
    '@typescript-eslint',
    'jsx-a11y',
    'cypress'
  ],
  rules: {
    '@typescript-eslint/default-param-last': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-loop-func': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    'import/default': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 1,
    'jsx-a11y/label-has-associated-control': 1,
    'jsx-a11y/click-events-have-key-events': 1,
    'jsx-a11y/no-static-element-interactions': 1,
    'cypress/no-unnecessary-waiting': 1,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        doubleQuote: false,
        semi: false,
        trailingComma: 'none'
      }
    ]
  }
}
