module.exports = {
    apps: [
        {
            name: `${process.env.ENVIRONMENT}-nodejs-boilerplate`,
            script: "./server.js",
            watch: false,
            env: {
                ENVIRONMENT: `${process.env.ENVIRONMENT}`,
                PORT: `${process.env.PORT}`,
                SERVICE_NAME: `${process.env.SERVICE_NAME}`,
                MYSQL_DB_HOST: `${process.env.MYSQL_DB_HOST}`,
                MYSQL_DB_USER: `${process.env.MYSQL_DB_USER}`,
                MYSQL_DB_PASS: `${process.env.MYSQL_DB_PASS}`,
                MYSQL_DB_NAME: `${process.env.MYSQL_DB_NAME}`,
                MYSQL_DB_PORT: `${process.env.MYSQL_DB_PORT}`
            }
        }
    ]
};
