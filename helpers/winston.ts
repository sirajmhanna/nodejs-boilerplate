const { winston, loggerConfiguration } = require("../config/winston");
const datetime = require("../helpers/datetime");

/**
 * Winston Transport Level Info
 * @function info()
 * @param { Number } requestId
 * @param { String } className
 * @param { String } functionName
 * @param { String } logMessage
 * @param { Object } data
 */
exports.info = (
  requestId: number,
  className: string,
  functionName: string,
  logMessage: string,
  data: object
) => {
  winston.createLogger(loggerConfiguration).info({
    requestID: requestId,
    date: datetime.millisecondsToYMD(new Date().getTime()),
    timestamp: new Date().getTime(),
    serviceName: process.env.SERVICE_NAME,
    className: className,
    functionName: functionName,
    logMessage: logMessage,
    data,
  });
};

/**
 * Winston Transport Level Warn
 * @function info()
 * @param { Number } requestId
 * @param { String } className
 * @param { String } functionName
 * @param { String } logMessage
 * @param { Object } data
 */
exports.warn = (
  requestId: number,
  className: string,
  functionName: string,
  logMessage: string,
  data: object
) => {
  winston.createLogger(loggerConfiguration).warn({
    requestID: requestId,
    date: datetime.millisecondsToYMD(new Date().getTime()),
    timestamp: new Date().getTime(),
    serviceName: process.env.SERVICE_NAME,
    className: className,
    functionName: functionName,
    logMessage: logMessage,
    data,
  });
};

/**
 * Winston Transport Level Error
 * @function info()
 * @param { Number } requestId
 * @param { String } className
 * @param { String } functionName
 * @param { String } logMessage
 * @param { Object } data
 */
exports.error = (
  requestId: number,
  className: string,
  functionName: string,
  logMessage: string,
  data: object
) => {
  winston.createLogger(loggerConfiguration).error({
    requestID: requestId,
    date: datetime.millisecondsToYMD(new Date().getTime()),
    timestamp: new Date().getTime(),
    serviceName: process.env.SERVICE_NAME,
    className: className,
    functionName: functionName,
    logMessage: logMessage,
    data,
  });
};
