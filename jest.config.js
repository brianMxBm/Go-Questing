module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  cacheDirectory: '.jest/cache',
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  clearMocks: true,
  collectCoverageFrom: ['./**/*.{ts,tsx}', '!**/node_modules/**', '!**/Go-Questing-Backend/**']
};
