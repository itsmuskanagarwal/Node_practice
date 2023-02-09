const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
// const staticpath = path.join(__dirname,"../public")

const staticpath = "../public"

//built-in middleware
app.use(express.static(staticpath));

app.get('/', function (req, res) {
    res.send('Home Page');
});

// app.post('/submit-data', function (req, res) {
//     res.send('This is Post method');
// });

// app.put('/update-data', function (req, res) {
//     res.send('Put method');
// });

// app.delete('/delete-data', function (req, res) {
//     res.send('This is delete method');
// });

var server = app.listen(port, function () {
    console.log(`Port no: ${port}`);
});