import express, { Router } from "express";
const route: Router = express.Router();
import ServerRoutes from "./api/routes/server";

// Server Routes
route.use("/server/", ServerRoutes);

export default route;
