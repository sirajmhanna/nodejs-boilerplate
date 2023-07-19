
# NodeJS Boilerpalte

This is a repository built using NodeJS, ExpressJS, and MySQL.



## Features

NodeJS, Express, and MySQL Boilerplate

## Tech Stack

**Server:** Node, Express, and MySQL


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`
`SERVICE_NAME`
`ENVIRONMENT`

`MYSQL_DB_HOST`
`MYSQL_DB_USER`
`MYSQL_DB_PASSWORD`
`MYSQL_DB_NAME`
`MYSQL_DB_PORT`

## Run Locally

Clone the project

```bash
  git clone https://github.com/sirajmhanna/nodejs-boilerplate.git
```

Go to the project directory

```bash
  cd ./nodejs-boilerplate
```
Install dependencies

```bash
  npm ci
```

Create .env file (check .env.example file)

```bash
  touch .env 
```

Database Migrations

```bash
  npx knex migrate:latest
```

Start the server

```bash
  npm run dev 
```
