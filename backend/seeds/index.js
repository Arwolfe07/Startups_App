const mongoose = require('mongoose');
const Data = require('../models/data');
const data = require('./data.json');
const mongoSeed = [];
for (const key in data) {
    mongoSeed.push(data[key]);
};

mongoose.connect('mongodb+srv://Aditya:Hp37e9608@stack-overflow.lnybhyh.mongodb.net/startups?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })

mongoSeed.forEach(d => {
    const newData = new Data(d);
    newData.save()
        .then(() => console.log('Saved...'))
        .catch(e => console.log(e));
})

// We run this file to store data for the backend (In this case startup data)

