const fs = require("fs");

const copyFile = (source, destination) => {
  try {
    fs.copyFileSync(source, destination);
  } catch (error) {
    console.error(error);
  }
};

const deleteDirectory = (directory) => {
  try {
    fs.rmSync(directory, { recursive: true });
  } catch (error) {
    console.log("The directory does not exist");
  }
};

const deleteFile = (file) => {
  try {
    fs.unlinkSync(file);
  } catch (error) {
    console.log("The directory does not exist");
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

module.exports = { copyFile, deleteDirectory, deleteFile, fileExists };
