import { createLogger, format, transports } from 'winston';
import prettyjson from 'prettyjson';

const options = {
  noColor: false,
};

const { printf, timestamp } = format;

// eslint-disable-next-line no-shadow
const customFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} | ${level}: ${typeof message === 'object' ? '\n' : ''}${prettyjson.render(
    message,
    options,
  )}`;
});

const logger = createLogger({
  format: format.combine(format.colorize(), timestamp(), customFormat),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: 'combined.log',
      level: 'info',
    }),
    new transports.File({
      filename: 'errors.log',
      level: 'error',
    }),
  ],
});

export { logger, logger as default };
