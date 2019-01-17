module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
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
    collectCoverage: true,
    collectCoverageFrom: [
      "src/**/*.ts"
    ],
    testEnvironment: "node",
    verbose: false

};