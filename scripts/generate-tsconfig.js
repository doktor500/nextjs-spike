const fileUtils = require("./utils/fileUtils");

if (process.env.MODE === "dev") {
  fileUtils.copyFile("tsconfig.json", "tsconfig.json.bak");
  fileUtils.deleteFile("tsconfig.json");
  fileUtils.copyFile("tsconfig.dev.json", "tsconfig.json");
}
