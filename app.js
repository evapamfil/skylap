var express = require('express');
var papa = require('papaparse');
const fs = require('fs');
var app = express();
var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var axios = require('axios');

var file = fs.createReadStream('./vendors/data_companies.csv')

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

app.get('/', function(req, res, next) {
    var data;
    papa.parse(file, {
        header: true,
        download: true,
        dynamicTyping: true,
        complete: function(results) {
            return res.json(results)
        }
    })
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})




