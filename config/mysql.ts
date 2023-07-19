import {
  createPool,
  Pool,
  PoolConnection,
  FieldPacket,
  OkPacket,
  ResultSetHeader,
  RowDataPacket,
} from "mysql2/promise";
import { Logger } from "../config/winston";

export class MySqlConnection {
  private static instance: MySqlConnection;
  private pool: Pool;

  private constructor() {
    this.pool = createPool({
      host: process.env.MYSQL_DATABASE_HOST,
      user: process.env.MYSQL_DATABASE_USER,
      password: process.env.MYSQL_DATABASE_PASSWORD,
      port: Number(process.env.MYSQL_DATABASE_PORT),
      database: process.env.MYSQL_DATABASE_NAME,
      connectionLimit: 100,
    });
  }

  public static getInstance(): MySqlConnection {
    if (!MySqlConnection.instance) {
      const logger = new Logger(new Date().getTime(), "mysql", "getInstance");
      logger.info("Creating MySQL Connection", {});
      MySqlConnection.instance = new MySqlConnection();
    }

    return MySqlConnection.instance;
  }

  public async getConnection(): Promise<PoolConnection> {
    const connection = await this.pool.getConnection();
    if (!connection) {
      console.log("No more connections available in the pool");
    }
    return connection;
  }

  public async release(connection: PoolConnection): Promise<void> {
    return connection.release();
  }

  public async end(): Promise<void> {
    await this.pool.end();
  }

  public async beginTransaction(connection: PoolConnection): Promise<void> {
    await connection.beginTransaction();
  }

  public async rollback(connection: PoolConnection): Promise<void> {
    await connection.rollback();
  }

  public async commit(connection: PoolConnection): Promise<void> {
    await connection.commit();
  }

  public async query<
    T extends
      | OkPacket
      | RowDataPacket[]
      | OkPacket[]
      | ResultSetHeader[]
      | RowDataPacket[][]
  >(
    connection: PoolConnection,
    sql: string,
    args?: any[]
  ): Promise<[T, FieldPacket[]]> {
    try {
      const [result, fields] = await connection.query(sql, args);
      return [result as T, fields];
    } catch (error) {
      throw error;
    }
  }
}
