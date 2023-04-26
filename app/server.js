let express = require('express');
let path = require('path');
let fs = require('fs');
let bodyParser = require('body-parser');
let app = express();
const axios = require('axios');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/', function (req, res) {
    console.log("Home page requested");

    axios.get("http://localhost:4000/users").then(result => {
      res.json(result);
    });    
  });


let port = process.env.PORT || 3000;
app.listen(3000, function () {
  console.log("frontend-app listening on port " + port);
});
