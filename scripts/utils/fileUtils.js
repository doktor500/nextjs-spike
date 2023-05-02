const fs = require("fs");

const copyFile = (source, destination) => {
  try {
    fs.copyFileSync(source, destination);
  } catch (error) {
    console.log(error);
  }
};

const deleteFile = (file) => {
  try {
    fs.unlinkSync(file);
  } catch (error) {
    console.log(error);
  }
};

const fileExists = (file) => {
  try {
    if (fs.existsSync(file)) {
      return true;
    }
  } catch (error) {
    console.error(error);
  }
  return false;
};

module.exports = { copyFile, deleteFile, fileExists };
