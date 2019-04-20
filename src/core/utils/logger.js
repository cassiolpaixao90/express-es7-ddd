import { Bristol } from 'bristol';
import palin from 'palin';

const bristol = new Bristol();

if (process.env.APP_LOG_LEVEL !== 'off') {
  bristol.addTarget('console').withFormatter(palin, {
    rootFolderName: 'express-es7-boilerplate'
  });
}

// exports.logger = logger;
