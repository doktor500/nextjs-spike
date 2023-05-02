const fileUtils = require("./utils/fileUtils");

if (fileUtils.fileExists("tsconfig.json.bak")) {
  fileUtils.deleteFile("tsconfig.json");
  fileUtils.copyFile("tsconfig.json.bak", "tsconfig.json");
  fileUtils.deleteFile("tsconfig.json.bak");
}