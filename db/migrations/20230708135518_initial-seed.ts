import { Knex } from "knex";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex: Knex) {
  await knex.raw(
    `
    INSERT
        INTO user_types (code_name, readable_name)
    VALUES
        ('admin', 'Administrator'),
        ('subscriber', 'Subscriber')
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
        DELETE FROM user_types WHERE id != 0
    `
  );

  return;
};
