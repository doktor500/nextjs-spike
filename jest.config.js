const nextJest = require("next/jest");
const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  moduleNameMapper: {
    "src/modules/movies/infrastructure/(.*)": ["<rootDir>/fakes/modules/movies/infrastructure/$1"],
    "src/modules/shared/infrastructure/(.*)": ["<rootDir>/fakes/modules/shared/infrastructure/$1"],
  },
};

module.exports = createJestConfig(customJestConfig);
