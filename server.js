require('dotenv').config();
const express = require('express');
const app = express();
PORT = process.env.PORT || 5100;
const bmarkController = require("./controller/bmarkController");
const morgan = require('morgan');
const cors = require('cors');


//MIDDLEWARE
app.use(cors())
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Sanity Check");
});

app.use("/bookmarks", bmarkController);







app.listen(5100, () => {console.log('Server is running on port 5100')});