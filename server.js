const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const wheelsRouter = require('./backend/routes/wheels.routes.js');
const Wheel = require('./backend/models/wheel.model.js'); // Bring in model to use mongoose methods

// Development Seed data Import. Remove or alter for deployment.
const fs = require('fs');
const seedData = JSON.parse(fs.readFileSync('./dev-data/dirt-wheels-directory.json'));

require('dotenv').config()

const app = express();
const PORT = 8080;

// Enable cors to use Mongo Atlas Cloud DB for dev
app.use(cors())
app.use(express.json()); // This technically replaced body parser (?)

// Connect to Mongoose DB
const uri = process.env.MONGO_URI;
// This allows us to envelope in some functionality during set up. 
const connectDb = () => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) console.log(err);

        console.log("Successfully connected to our Database!");
    });
}


// This isn't actually needed, used just to alert about connection
// We can add in later
// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log("Connected to our DB of wheeeels!")
// });

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


// Seed database with data if empty (Set true during development to reseed with json file)
// Can also be used to seed deployed app
const resetDatabaseOnSync = true;

const seedDatabaseFromJSON = async () => {
    await Promise.all([
        Wheel.insertMany(seedData, (err) => { if (err) throw err })
    ])
        .then(console.log('Database seeded with data.'))
        .catch((err) => { if (err) throw err });
};

// Start server after connecting to database
connectDb()
    .then(async () => {
        if (resetDatabaseOnSync) {
            await Promise.all([
                Wheel.deleteMany({})
            ])
                .then(console.log(`resetDatabaseOnSync set to true, will delete entire database`))
                .catch((err) => { if (err) throw err });
        }

        seedDatabaseFromJSON();

        app.listen(process.env.PORT || PORT, () => {
            console.log(`Server Running on port ${PORT}.`);
        });
    });
