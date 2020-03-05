const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema model, takes object which is definition of schema, second parameter is an obj of schema options.
const wheelSchema = new Schema({
    stockID: String,
    size: Number,
    rimMaterial: String,
    rimName: String,
    hubName: String,
    hubSpacing: Number,
    brake: String,
    spokeLengthNDS: String,
    spokeLengthDS: String,
    notes: String
}, {
    timestamps: false
});

// Creates the model from the Schema, we use the "Model" as the "prototypical" document of that type.
const Wheel = mongoose.model("Wheel", wheelSchema);

module.exports = Wheel;
