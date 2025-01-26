module.exports = {
  development: {
    username: 'root',
    password: 'Password',
    database: 'senior_project',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USERNAME,  // Use environment variable for username
    password: process.env.DB_PASSWORD,  // Use environment variable for password
    database: process.env.DB_NAME,      // Use environment variable for database name
    host: process.env.DB_HOST,          // Use environment variable for host
    dialect: 'postgres',                // Use postgres as dialect
  },
};
