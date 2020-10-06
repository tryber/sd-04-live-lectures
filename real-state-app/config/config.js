module.exports = {
  "development": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": "cookmaster",
    "host": process.env.HOSTNAME,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": "cookmaster",
    "host": process.env.HOSTNAME,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": "cookmaster",
    "host": process.env.HOSTNAME,
    "dialect": "mysql"
  }
};
