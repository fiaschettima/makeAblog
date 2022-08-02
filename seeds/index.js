const sequelize = require('../config/connection');
const seedUser = require('./user');
const seedPost = require('./post');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPost();

  process.exit(0);
};

seedAll();
