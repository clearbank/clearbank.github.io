module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',
  },
  moduleNameMapper: {
  '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
  '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/__mocks__/file-mock.js',
  '^.+\\.(svg)$': '<rootDir>/src/transformers/svg.js',

  '^yet-another-react-lightbox$':
    '<rootDir>/__mocks__/yet-another-react-lightbox.js',

  '^yet-another-react-lightbox/plugins/zoom$':
    '<rootDir>/__mocks__/yet-another-react-lightbox-zoom.js'
},
  testEnvironment: 'jsdom',
  testMatch: ['**/**/*.spec.ts?(x)'],
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby|gatsby-script|gatsby-link|gatsby-plugin-mdx|element-react)/)`],
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
  testEnvironmentOptions: {
    url: `http://localhost`,
  },
  modulePaths: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js']
}
