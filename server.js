var DocumentDBClient = require('documentdb').DocumentClient;
var config = require('./config');
var ItemDao = require('./models/itemDao');
var ConfigDao = require('./models/configDao');

var express = require('express'),
    bodyParser = require('body-parser');

console.log('Starting app.js');
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var docDbClient = new DocumentDBClient(config.host, {
    masterKey: config.authKey
});
var configDao = new ConfigDao(docDbClient, config.databaseId, config.collectionId);
configDao.init();
var itemDao = new ItemDao(docDbClient, config.databaseId, config.collectionId);
itemDao.init();

var siteRouter = require('./Routes/siteRoutes')(itemDao, configDao);
app.use('/api', siteRouter); 
app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.get('/', function(req, res){
    res.send('welcome to my API!');
});

app.listen(port, function(){
    console.log('Gulp is running my app on  PORT: ' + port);
});

module.exports = app;