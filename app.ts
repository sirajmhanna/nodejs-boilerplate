import http from "http";
import express, { Express, Request, Response, NextFunction } from "express";
const app: Express = express();
import dotenv from "dotenv";
import morgan from "morgan";
import { Logger } from "./config/winston";
import router from "./router";
import { MySqlConnection } from "./config/mysql";
import cors from "cors";

// MySQL connection
MySqlConnection.getInstance();

// dotenv configuration
dotenv.config();

// morgan configuration
if (process.env.ENVIRONMENT !== "production") {
  app.use(morgan("dev"));
}

// CORS configuration
app.use(
  cors({
    origin:
      process.env.ENVIRONMENT !== "production"
        ? [String(process.env.FRONTEND_BASE_URL), "http://localhost:3000"]
        : [String(process.env.FRONTEND_BASE_URL)],
    credentials: true,
    allowedHeaders:
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  })
);

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

// CORS headers
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, Credential"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, PATCH, GET, DELETE");
    return res.status(200).json({});
  }
  return next();
});

// routes
app.use("/api/v1/", router);

// http server
const port = process.env.PORT ?? 5000;

http.createServer(app).listen(port, () => {
  const logger = new Logger(new Date().getTime(), "server", "listen");
  logger.info("Server is up", { port });
});
