import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: ["test/cypress/e2e/**/*.test.ts"],
    supportFile: false,
  },
});
