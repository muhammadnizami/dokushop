// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var connection  = require('express-myconnection'); 
var mysql = require('mysql');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8084;        // set our port. nanti diganti saat production

// DATABASE CONNECTION
//
//===========================================================================
app.use(
    
    connection(mysql,{
        
        host: 'localhost',
        user: 'dokushop_node',
        password : 'Aepuu5zu',
        port : 3306, //port mysql
        database:'dokushop_db'
    },'request')
);

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router
var merekroute = require ('./routes/merekroute');
var aksesorisroute = require ('./routes/aksesorisroute');
var imagesroute = require ('./routes/imagesroute');

router.get('/', function(req, res) {
    res.json({ message: 'welcome to doku shop api!' });
});
app.use('/merek',merekroute.router);
app.use('/aksesoris',aksesorisroute.router);
app.use('/image',imagesroute.router);

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('doku shop api started on port ' + port);

