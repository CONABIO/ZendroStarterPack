const { resolve } = require('path');
var path = require("path");
const { readdir } = require('fs').promises;

/**
 * @function - Given a dir path returns an array of the files inside recursively.
 *
 * @param  {string} dir         string containing the dir path.
 * @return {Array}            an array of files contained in the dir.
 */
 module.exports.getFiles = async (dir) => {
  const dirents = await readdir(dir, { withFileTypes: true });
  let absPath = path.resolve(dir); 
  const nestedPath = absPath.split("migrations")[1]; 
  absPath = absPath.replace(nestedPath,'')
  const files = await Promise.all(dirents.map((dirent) => {
    const res = resolve(dir, dirent.name);
    return dirent.isDirectory() ? this.getFiles(res) : res.replace(absPath + '/','');
  }));
  return Array.prototype.concat(...files);
}