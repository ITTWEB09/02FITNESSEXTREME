var express = require('express');
var router = express.Router();

module.exports = function(app, authenticate){
    app.use('/', function(req, res, next) {
        console.log('Accessing index!');
        res.render('../client/index.html');
    });
}