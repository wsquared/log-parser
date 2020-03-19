import fs from 'fs';
import path from 'path';
import { logger } from './logger';

const readLogSync = (logPath = '') => {
  let logFile = '';

  try {
    logFile = fs.readFileSync(
      logPath || path.join(__dirname, '/../data/programming-task-example-data.log'),
      'utf8',
    );
  } catch (e) {
    logger.error(e);
  }

  return logFile;
};

const parseLogFile = logFile =>
  logFile
    .trim()
    .split(/\n/)
    .map(log => {
      const delimiters = new RegExp(/(?: - |\[|\] |"-"|\")+/);
      const emptyString = item => item === '' ? false : true;
      const result = log
        .split(delimiters)
        .map(s => s.trim())
        .filter(emptyString);

      return result;
    });

export { readLogSync, parseLogFile };
