module.exports = {
  runner: "jest-runner-tslint",
  testEnvironment: "node",
  moduleFileExtensions: [
    "js",
    "json",
    "ts"
  ],
  testMatch: [
    "**/*.spec.ts",
  ],
  testPathIgnorePatterns: [
    "/.c9/"
  ],
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  coverageDirectory: "<rootDir>/coverage",
  collectCoverage: false,
  collectCoverageFrom: [
    "src/**/*.ts"
  ],
  testEnvironment: "node",
  verbose: true
};
