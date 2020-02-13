module.exports = {
  extends: 'airbnb',
  plugins: ['import', 'jest'],
  env: {
    'jest/globals': true
  },
  rules: {
    "no-console": "off",
    "no-underscore-dangle": 0,
    "class-methods-use-this": 0,
  }
};
