const bodyParser = require('body-parser');
const express = require('express');
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.use(cors());

app.get('/ping', (req, res) => {
    res.send(new Date());
});

const server = app.listen(5000, () => {
    const port = server.address().port;
    console.log("Server is listening on port %d in %s mode", port, app.settings.env);
})