module.exports = {
  "development": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DATABASE_USERNAME ,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE ,
    "host": process.env.HOST,
    "dialect": "postgres",
    "port": process.env.PORT
    // "use_env_variable": "DATABASE_URL"
  }
}

