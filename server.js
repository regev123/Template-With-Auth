const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  process.exit(1);
});

const mongoose = require('mongoose');
const app = require('./app');

//replace the password and the DB name in the connection string.
const DB = process.env.DB.replace(
  '<PASSWORD>',
  process.env.DB_PASSWORD
).replace('<DB_NAME>', process.env.DB_NAME);

//connect to DB.
mongoose.connect(DB).then(() => console.log('DB Connected!'));

//run the server.
const server = app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}...`);
});

//If there is any problem that prevents the server from actively functioning, close all existing processes and then shut down the server.
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLER REJECTION! Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
