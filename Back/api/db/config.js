const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.HOST || 'localhost',
    port: env.PORT || '5472',
    user: env.USER || 'postgres',
    password: env.PASSWORD || 'password',
    database: env.DB || 'UnionOrganizer',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;