const winston = require("winston");

exports.create = function (errorLog, infoLog) {
  const logger = winston.createLogger({
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: errorLog, level: 'error' }),
      new winston.transports.File({ filename: infoLog })
    ]
  });

  return logger;
}

exports.log = {
  error: 0,
  warn: 1,
  info: 2,
  verbose: 3,
  debug: 4,
  silly: 5
}