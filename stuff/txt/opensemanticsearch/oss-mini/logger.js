const winston = require("winston");
require('winston-daily-rotate-file');
const { combine, timestamp, printf, splat } = winston.format;


exports.create = function (filepath) {
  const myFormat = printf(info => {
    return `${info.timestamp} ${info.level}: ${info.message}`;
  });

  const logger = winston.createLogger({
    format: combine(
      splat(),
      timestamp(),
      myFormat
    ),
    transports: [
      new winston.transports.DailyRotateFile({ filename: filepath, datePattern: 'YYYY-MM' })
    ]
  });

  return logger;
}
