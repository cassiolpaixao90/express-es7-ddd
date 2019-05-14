const webpack = require('webpack');
const defaultConfig = require('../webpack/webpack.prod');

process.on('SIGINT', process.exit);

const options = {
  env: 'production'
};

const serverConfig = defaultConfig(options);

process.on('SIGINT', process.exit);

const serverCompiler = webpack(serverConfig);

serverCompiler.run((error, stats) => {
  if (error || stats.hasErrors()) {
    process.exitCode = 1;
  }
});
