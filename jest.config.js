const nextJest = require("next/jest");
const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  moduleNameMapper: {
    "src/movies/infrastructure/repositories/(.*)": ["<rootDir>/fakes/movies/infrastructure/repositories/$1"],
  },
};

module.exports = createJestConfig(customJestConfig);
