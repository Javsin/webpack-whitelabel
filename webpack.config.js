const glob = require('glob');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
function getEntries(pattern) {
    const entries = {};
  
    glob.sync(pattern).forEach((file) => {
      entries[file.replace('src/', '')] = path.join(__dirname, file);
    });
  
    return entries;
  }
  
module.exports = {
    mode: 'development',
    target: ["web", "es5"],
    entry: getEntries('src/*.js'),
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            }
          }
        })
      ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]',
    },
};