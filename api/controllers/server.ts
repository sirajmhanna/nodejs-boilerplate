import { Request, Response } from "express";
import { Logger } from "../../config/winston";
import { MySqlConnection } from "../../config/mysql";

export const health = async (req: Request, res: Response) => {
  const MySQL = MySqlConnection.getInstance();
  const connection = await MySQL.getConnection();

  try {
    const logger = new Logger(req.body.requestID, "server", "health");
    logger.info("Starting execution", {});

    if (req.query.sayMyName !== "heisenberg") {
      res.status(401).json({
        message: "I am not in danger, Skyler. I AM the danger!",
      });
    }

    const [result] = await MySQL.query(connection, `SELECT * FROM user_types`);

    logger.info("Returning success response", {});
    return res.status(200).json({
      status: "success",
      message: "Server is alive",
      data: {
        service: process.env.SERVICE_NAME,
        result,
      },
    });
  } catch (error) {
    return res.status(500).json({ error });
  } finally {
    await MySQL.release(connection);
  }
};
