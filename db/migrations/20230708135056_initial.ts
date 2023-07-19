import { Knex } from "knex";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex: Knex) {
  await knex.raw(
    `
        CREATE TABLE IF NOT EXISTS user_types (
            id int UNSIGNED NOT NULL AUTO_INCREMENT,
            code_name varchar(255) NOT NULL,
            readable_name varchar(255) NOT NULL,
            created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            deleted_at datetime,
            PRIMARY KEY(id)
        )
    `
  );

  await knex.raw(
    `
        CREATE TABLE IF NOT EXISTS users (
            id int UNSIGNED NOT NULL AUTO_INCREMENT,
            user_type_id int UNSIGNED NOT NULL,
            created_by_user_id int DEFAULT NULL,
            first_name varchar(255) NOT NULL,
            last_name varchar(255) NOT NULL,
            phone_number varchar(255) NOT NULL,
            email varchar(255),
            password varchar(255) NOT NULL,
            is_email_verified tinyint(1) NOT NULL DEFAULT 0,
            is_suspended tinyint(1) NOT NULL DEFAULT 0,
            failed_login_count int NOT NULL DEFAULT 0,
            created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            deleted_at datetime,
            PRIMARY KEY(id),
            FOREIGN KEY (user_type_id)
            REFERENCES user_types(id)
        )
    `
  );

  return;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex: Knex) {
  await knex.raw(
    `
        DROP TABLE users;
    `
  );

  await knex.raw(
    `
        DROP TABLE user_types;
    `
  );

  return;
};
