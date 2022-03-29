module.exports = {
  moduleDirectories: ['<rootDir>/node_modules'],
  moduleNameMapper: {
    '\\.(woff2?|ttf|otf|eot|png|jpe?g|gif|svg|css|scss)$':
      '<rootDir>/jest.mock.js',
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverageFrom: ['src/**/*.tsx'],
  reporters: ['default'],
  coverageReporters: ['cobertura', 'text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
}
