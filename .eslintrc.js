module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-native', 'prettier'],
  rules: {
    // Enforce semi-colons and consistent formatting
    semi: ['error', 'always'],
    'prettier/prettier': 'error',

    // Enforce consistent naming for interfaces using naming-convention
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],

    // Prevent usage of any, require explicit types
    '@typescript-eslint/no-explicit-any': 'warn',

    // Disallow unused variables
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],

    // Enforce consistent return types
    '@typescript-eslint/explicit-module-boundary-types': 'warn',

    // Enforce component naming convention and prop validation
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-curly-brace-presence': [
      'error',
      {props: 'never', children: 'never'},
    ],
    'react/jsx-no-duplicate-props': 'error',

    // React Native specific rules
    'react-native/no-inline-styles': 'warn',
    'react-native/no-unused-styles': 'warn',
    'react-native/split-platform-components': 'warn',

    // Accessibility and best practices
    'react-native/no-single-element-style-arrays': 'warn',
    'react/self-closing-comp': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
