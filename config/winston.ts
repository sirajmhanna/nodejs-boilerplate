import winston from "winston";
const datetime = require("../helpers/datetime");

export class Logger {
  requestID: number;
  className: string;
  functionName: string;

  constructor(requestID: number, className: string, functionName: string) {
    this.requestID = requestID;
    this.className = className;
    this.functionName = functionName;
  }

  info(logMessage: string, data: object) {
    winston
      .createLogger({
        transports: new winston.transports.Console({
          format: winston.format.combine(winston.format.json()),
        }),
      })
      .info({
        requestID: this.requestID,
        date: datetime.millisecondsToYMD(new Date().getTime()),
        timestamp: new Date().getTime(),
        serviceName: process.env.SERVICE_NAME,
        className: this.className,
        functionName: this.functionName,
        logMessage: logMessage,
        data,
      });
  }

  warn(logMessage: string, data: object) {
    winston
      .createLogger({
        transports: new winston.transports.Console({
          format: winston.format.combine(winston.format.json()),
        }),
      })
      .warn({
        requestID: this.requestID,
        date: datetime.millisecondsToYMD(new Date().getTime()),
        timestamp: new Date().getTime(),
        serviceName: process.env.SERVICE_NAME,
        className: this.className,
        functionName: this.functionName,
        logMessage: logMessage,
        data,
      });
  }

  error(logMessage: string, data: object) {
    winston
      .createLogger({
        transports: new winston.transports.Console({
          format: winston.format.combine(winston.format.json()),
        }),
      })
      .error({
        requestID: this.requestID,
        date: datetime.millisecondsToYMD(new Date().getTime()),
        timestamp: new Date().getTime(),
        serviceName: process.env.SERVICE_NAME,
        className: this.className,
        functionName: this.functionName,
        logMessage: logMessage,
        data,
      });
  }
}
