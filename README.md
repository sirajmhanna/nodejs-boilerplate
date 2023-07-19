
# NodeJS Boilerplate

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

`MYSQL_DATABASE_HOST`
`MYSQL_DATABASE_USER`
`MYSQL_DATABASE_PASSWORD`
`MYSQL_DATABASE_PORT`
`MYSQL_DATABASE_NAME`

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

Build

```bash
  npm run build 
```

Start the server

```bash
  npm run dev 
```
