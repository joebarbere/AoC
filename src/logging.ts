import pino from 'pino';

export const logName = 'AoC - 2021';

export const logger = pino({
  name: 'AoC - 2021',
  level: process.env.PINO_LOG_LEVEL || 'silent',
});

module.exports.logger = logger;
module.exports.logName = logName;
