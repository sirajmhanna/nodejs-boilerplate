import Joi from "joi";

export const key = Joi.object({
  sayMyName: Joi.string().required().min(1).max(15),
});
