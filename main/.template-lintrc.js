'use strict';

module.exports = {
  extends: ['octane', 'ember-template-lint-plugin-prettier:recommended'],
  plugins: ['ember-template-lint-plugin-prettier'],
  rules: {
    'no-inline-styles': { allowDynamicStyles: true },
    'no-element-event-actions': 'warn',
    'simple-unless': false,
    'no-implicit-this': 'warn',
    'no-action': 'warn',
    'no-curly-component-invocation': 'warn',
    'no-passed-in-event-handlers': 'warn',
    'require-valid-alt-text': 'warn',
  },
};
