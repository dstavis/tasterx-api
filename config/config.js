module.exports = {
  "production": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "operatorsAliases": false,
    "use_env_variable": "https://tasterx.herokuapp.com/",
    "dialect": "postgres"
  }
}

