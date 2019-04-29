import chalk from 'chalk';
const { container } = require('../lib');
const app = container.resolve('app');

app
  .start()
  .then(() => {
    console.log(`
    ${chalk.magenta(`App Started`)}
    ${chalk.green(`Press ${chalk.green('CTRL-C')} to stop`)}
  `);
  })
  .catch(error => {
    console.log(`
    ${chalk.red(`Error: ${error.message}`)}
  `);
    process.exit();
  });
