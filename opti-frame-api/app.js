const express = require("express");
var cors = require('cors')
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

const dotenv = require("dotenv");
dotenv.config();

require("./models/Movie");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const movieRoutes = require("./routes/Movie");

app.use(movieRoutes);

app.listen(3001);
