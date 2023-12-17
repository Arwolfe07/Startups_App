// Getting data from mongoDB and returning it to frontend
const Data = require('../models/data');

// Get all the data in the database.
module.exports.getData = async (req, res) => {
    try {
        const data = await Data.find();
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ message: "Something went wrong" });
    }
}

// Add new data into existing database.
module.exports.addData = async (req, res) => {
    const { data } = req.body;
    try {
        const existingStartup = await Data.findOne({ StartupName: data.StartupName });
        if (existingStartup) {
            return res.status(404).json({ message: 'Startup Already Exists' });
        }
        const newData = new Data(data);
        await newData.save();
        const refreshedData = await Data.find();
        return res.status(200).json(refreshedData);
    }
    catch (err) {
        return res.status(500).json({ message: "Something went wrong" })
    }
}