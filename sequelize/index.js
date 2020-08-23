const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('webropay', 'candidate01', 'webropay', {
    host: 'webropay.czeruqgah1kf.us-east-1.rds.amazonaws.com',
    dialect: 'postgres'
  });


async function testSequelize(){
  try {
    await sequelize.authenticate()
    console.log(sequelize);
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }}

  testSequelize();