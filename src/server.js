const dotenv = require('dotenv');
dotenv.config();
const http = require('node:http');
const app = require('./app');
const connectDB = require('./config/db');
const startCronJob = require('./utils/cronjob');

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
  startCronJob();
  connectDB();
  console.log(`🔥 Server is running on http://localhost:${PORT}`);
});
