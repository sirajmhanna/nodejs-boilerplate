import { Request, Response, NextFunction } from "express";
import CommonResponses from "../../helpers/common-responses";
import { Schema, ValidationError } from "joi";

export const validate = (schema: Schema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.options({ abortEarly: false }).validateAsync({
        ...req.body,
        ...req.query,
        ...req.params,
      });
      return next();
    } catch (error: unknown) {
      if ((error as ValidationError).isJoi) {
        const validationError = error as ValidationError;
        return res.status(403).json({
          ...CommonResponses.validationError,
          data: {
            details: validationError.details,
          },
        });
      }

      return res.status(500).json(CommonResponses.serverError);
    }
  };
};
