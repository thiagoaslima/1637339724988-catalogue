const path = require('path');

module.exports = {
  rootDir: './src',
  setupFiles: [
    path.resolve('jest/setupEnzyme.js')
  ],
  setupFilesAfterEnv: [
    path.resolve('jest/setupMsw.js'),
    path.resolve('jest/setupJestDom.js'),
  ],
}
