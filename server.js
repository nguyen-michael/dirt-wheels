const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const wheelsRouter = require('./backend/routes/wheels.routes.js');

require('dotenv').config()

const app = express();
const PORT = 8080;

// Enable cors to use Mongo Atlas Cloud DB for dev
app.use(cors())
app.use(express.json()); // This technically replaced body parser (?)

// Connect to Mongoose DB
const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected to our DB of wheeeels!")
});

//Use the Built react app, not actually used in development
app.use(express.static(path.join(__dirname, 'build')));

// Quick test
app.get('/ping', function (req, res) {
 return res.send('pong');
});

// Serve the index page in production build
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// MongoDB CRUD API
app.use('/wheels', wheelsRouter);

// Start server
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});