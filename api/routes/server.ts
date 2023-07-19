import express, { Router } from "express";
import { generateRequestIdentifier } from "../middlewares/requests";
import * as ServerControllers from "../controllers/server";
import * as joi from "../middlewares/joi";
import * as joiServerSchema from "../../helpers/form-validation/joi/server";

const route: Router = express.Router();

// Server Health Route
route.get(
  "/health",
  joi.validate(joiServerSchema.key),
  generateRequestIdentifier,
  ServerControllers.health
);

export default route;
