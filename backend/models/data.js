const mongoose = require('mongoose');

// This created a schema for mongoose
const dataSchema = new mongoose.Schema({
    Date: String,
    StartupName: String,
    IndustryVertical: String,
    SubVertical: String,
    CityLocation: String,
    InvestorsName: String,
    InvestmentType: String,
    AmountInUSD: String,
    Remarks: String
});

// This creates a Model from the schema, opening it up to use its properties and methods in the application code.
module.exports = mongoose.model('Data', dataSchema);