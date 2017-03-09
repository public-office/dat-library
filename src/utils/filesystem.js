import fs from 'fs';
import path from 'path';
import Promise from 'bluebird';

const readdirAsync = Promise.promisify(fs.readdir);

export const getDirectories = srcpath => readdirAsync(srcpath) // eslint-disable-line 
  .filter(file => fs.statSync(path.join(srcpath, file)).isDirectory());