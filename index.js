const bodyParser = require('body-parser');
const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const AppRouter = require('./app/routes/AppRouter');

dotenv.config();
const app = express();

mongoose.set("useFindAndModify", false)
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connected to db");
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(cors());

new AppRouter(app).initRoutes();

var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("Server is running on port " + port);
  });