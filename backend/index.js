if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dataRoutes = require('./routes/data');

const app = express();

app.use(cors());
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.get('/', (req, res) => res.send('Working...'));
app.use('/startup', dataRoutes);

const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 5000;

// Connect to MongoDB database
mongoose.connect(DB_URL)
    .then(app.listen(PORT, () => console.log(`Listening on PORT: `, PORT)))
    .catch(err => console.log(err));
