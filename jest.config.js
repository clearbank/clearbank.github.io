module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js'
    // '^.+\\.(md|mdx)$': 'jest-transformer-mdx'
  },
  transformIgnorePatterns: ['node_modules/(?!(gatsby|gatsby-plugin-mdx)/)'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
    '^.+\\.(svg)$': '<rootDir>/src/transformers/svg.js'
  },
  testEnvironment: 'jsdom',
  testMatch: ['**/**/*.spec.ts?(x)'],
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [
    `node_modules/(?!(gatsby)/)`,
    `node_modules/(?!(gatsby-plugin-mdx)/)`
  ],
  globals: {
    NODE_ENV: 'test'
  },
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  // coverage settings
  collectCoverage: true,
  collectCoverageFrom: ['src/components/**/*.ts?(x)'],
  coverageDirectory: './coverage',
  coverageReporters: ['json', 'lcov', 'text', 'cobertura'],
  globals: {
    __PATH_PREFIX__: ``
  },
  testURL: `http://localhost`,
  //setupFiles: [`<rootDir>/loadershim.js`],
  modulePaths: ['<rootDir>'],
  // snapshotSerializers: ['<rootDir>/node_modules/enzyme-to-json/serializer']
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js']
}
