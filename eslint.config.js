import globals from 'globals';
import pluginJs from '@eslint/js';

export default {
  languageOptions: {
    globals: {
      ...globals.browser,
      
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@eslint/js/recommended',
    'prettier' // Ensure this is the last to override rules
  ],
  plugins: [
    '@eslint/js',
  ],
  rules: {
      "prettier/prettier": "error"
  },
};
