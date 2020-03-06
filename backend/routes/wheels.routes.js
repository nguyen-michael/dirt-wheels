const router = require('express').Router();
let Wheel = require('../models/wheel.model.js');

// Prefixed with /wheels

// Get all Wheels
router.route('/').get((req, res) => {
    Wheel
        .find()
        .then(wheels => res.json(wheels))
        .catch(err => res.status(400).json(`Error getting all wheels: ${err}`));
});

// Get all wheels matching filter
router.route('/search').get((req, res) => {
    Wheel
        .find(req.body)
        .then(wheels => res.json(wheels))
        .catch(err => res.status(400).json(`Error getting wheels by property: ${err}`))
});

// Find by Pat's Stock ID (can get pair)
router.route('/:stockID').get((req, res) => {
    Wheel
        .find({ stockID: req.params.stockID })
        .then(wheels => res.json(wheels))
        .catch(err => res.status(400).json(`Error getting wheel by pat's ID: ${err}`));

});

// Add Wheel to Database
router.route('/add').post((req, res) => {
    // Expect request body to match property names
    const data = {
        stockID: req.body.stockID,
        size: req.body.size,
        rimMaterial: req.body.rimMaterial,
        rimName: req.body.rimName,
        hubName: req.body.hubName,
        hubSpacing: req.body.hubSpacing,
        brake: req.body.brake,
        spokeLengthNDS: req.body.spokeLengthNDS,
        spokeLengthDS: req.body.spokeLengthDS,
        notes: req.body.notes
    }

    const newWheel = new Wheel(data);

    newWheel
        .save()
        .then(() => res.json('Wheel Created'))
        .catch(err => res.status(400).json(`Error creating new item: ${err}`));

});


// Update Existing Wheel information (should attach internal ID in front end to allow this to work)

// Delete ALL WHEELS 
router.route('/delete-all').delete((req, res) => {
    Wheel
        .deleteMany({})
        .then(() => res.json('EVERYTHING IS DELETED'))
        .catch(err => res.status(400).json(`Error creating DELETING EVERYTHING: ${err}`));
});

module.exports = router;