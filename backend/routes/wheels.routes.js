const router = require('express').Router();
let Wheel = require('../models/wheel.model.js');

// Prefixed with /wheels

// Find by Pat's Stock ID (can get pair)
router.route('/:stockID').get((req, res) => {
    Wheel
        .find({stockID: req.params.stockID})
        .then(wheels => res.json(wheels))
        .catch(err => res.status(400).json(`Error getting wheel by pat's ID: ${err}`));

});

module.exports = router;