module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(css|styl|less|svg|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/src/setupEnzyme.ts'],
  coverageReporters: ['text', 'lcov'],
  moduleNameMapper: {
    '.+\\.(css|scss)$': '<rootDir>/src/customStyleMapper.js',
  },
};
