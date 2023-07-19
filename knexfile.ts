/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.MYSQL_DATABASE_HOST,
      user: process.env.MYSQL_DATABASE_USER,
      password: process.env.MYSQL_DATABASE_PASSWORD,
      port: process.env.MYSQL_DATABASE_PORT,
      database: process.env.MYSQL_DATABASE_NAME,
      timezone: "UTC",
    },
    migrations: {
      directory: "./db/migrations",
    },
  },

  staging: {
    client: "mysql2",
    connection: {
      host: process.env.MYSQL_DATABASE_HOST,
      user: process.env.MYSQL_DATABASE_USER,
      password: process.env.MYSQL_DATABASE_PASSWORD,
      port: process.env.MYSQL_DATABASE_PORT,
      database: process.env.MYSQL_DATABASE_NAME,
      timezone: "UTC",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "mysql2",
    connection: {
      host: process.env.MYSQL_DATABASE_HOST,
      user: process.env.MYSQL_DATABASE_USER,
      password: process.env.MYSQL_DATABASE_PASSWORD,
      port: process.env.MYSQL_DATABASE_PORT,
      database: process.env.MYSQL_DATABASE_NAME,
      timezone: "UTC",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
