const webpack = require('webpack');
const chalk = require('chalk');
const rimraf = require('rimraf');
const chokidar = require('chokidar');

const webpackConfig = require('../webpack/webpack.prod');

const args = process.argv.slice(2);
const watchMode = args[0] === '--watch' || args[0] === '-w';

const isCI = process.env.CI && (typeof process.env.CI !== 'string' || process.env.CI.toLowerCase() !== 'false');

function build(config, name, callback) {
  console.log(chalk.cyan('Compiling ' + name));
  webpack(config).run((error, stats) => {
    if (error) {
      console.log(chalk.red('Failed to compile.'));
      console.log(error.message || error);
      console.log();
    }

    if (stats.compilation.errors.length) {
      console.log(chalk.red('Failed to compile.'));
      console.log(stats.toString({ all: false, errors: true }));
    }

    if (stats.compilation.warnings.length) {
      console.log(chalk.yellow('Compiled with warnings.'));
      console.log(stats.toString({ all: false, warnings: true }));
    }

    if (error || stats.compilation.errors.length || stats.compilation.warnings.length) {
      isCI && process.exit(1);
      return;
    }

    console.log(stats.toString({ colors: true, modules: false, version: false }));
    console.log();

    callback(stats);
  });
}

function runBuildSteps() {
  build(webpackConfig, 'server.js', () => {
    console.log(chalk.bold.green('Compiled successfully!\n\n'));
  });
}

function setupWatch() {
  const watcher = chokidar.watch('./src', {
    ignoreInitial: true
  });

  watcher.on('change', runBuildSteps);
  watcher.on('add', runBuildSteps);

  watcher.on('ready', () => {
    runBuildSteps();
  });

  process.on('SIGINT', function() {
    watcher.close();
    process.exit(0);
  });

  watcher.on('error', error => {
    console.error('Watcher failure', error);
    process.exit(1);
  });
}

// Clean up lib folder
rimraf('dist/', () => {
  console.log('Cleaned up the lib folder.\n');
  watchMode ? setupWatch() : runBuildSteps();
});
