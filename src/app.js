const express = require('express');
const { join } = require('path');
const cors = require('cors');
const router = require('./routes/user.route');

const app = express();

// Serve the static files
app.use(express.static(join(__dirname, '../public')));

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../public/index.html'));
});

module.exports = app;
