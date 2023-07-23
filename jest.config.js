/* eslint-disable no-undef */
module.exports = {
    verbose: true,
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testEnvironment: 'jsdom',
  };
  