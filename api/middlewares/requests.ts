import { Request, Response, NextFunction } from "express";
import { Logger } from "../../config/winston";

/**
 * Generate Request ID Middleware
 * @param { Object } req
 * @param { Object } res
 * @param { Object } next
 * @returns { Object }
 */
export const generateRequestIdentifier = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const logger = new Logger(
    new Date().getTime(),
    "middleware-requests",
    "generateRequestIdentifier"
  );

  const requestID = new Date().getTime();
  logger.info("Starting execution :: Generating New Request ID", {
    date: new Date(),
    requestID: requestID,
    ipAddress: req.ip,
  });

  // Declare requestID property on the Request object
  req.body.requestID = requestID;

  return next();
};
