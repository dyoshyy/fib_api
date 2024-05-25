/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  coverageProvider: "v8",

  roots: [
    "<rootDir>/src/__test__"
  ],

  testMatch: [
    "**/*.test.ts"
  ],

  testPathIgnorePatterns: [
    "/dist/",
    "/node_modules/"
  ],
  
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  
};

module.exports = config;
