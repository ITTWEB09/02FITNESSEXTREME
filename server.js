var path = require('path');
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var config = require('./config');

var app = express();
app.set('port', (process.env.PORT || 5000));
app.set('secret', config.secret);

//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));    

var expressJwt = require('express-jwt');  
var authenticate = expressJwt({
    secret : app.get('secret'),
    getToken: function(req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1];
        } else if(req.query && req.query.token) {
            return req.query.token;
        }

        return req.cookies.myToken;
    }
});

require('./authentication')(app);
require('./routes/routes_api')(app, authenticate);

app.all('*', function(req, res) {
    res.status(200).sendFile('index.html');
});

app.listen(app.get('port'), function(){
    console.log('Server started!');
});