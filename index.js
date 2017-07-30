const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
let entered = false;

app.use(cookieSession({
    name: 'session',
    secret: 'This1 Is2 a3 vERRy4 diFFicUlt5 SecrEt6 to7 KEEP8',
    maxAge: 24 * 60 * 60 * 1000
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

if (process.env.NODE_ENV != 'production') {
    app.use(require('./build'));
}

app.use(express.static(__dirname + '/public'));
app.use('public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(8080, function() {
    console.log("I'm listening.")
});
