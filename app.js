var DocumentDBClient = require('documentdb').DocumentClient;
var config = require('./config');
var TaskDao = require('./models/taskDao');

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
var taskDao = new TaskDao(docDbClient, config.databaseId, config.collectionId);
taskDao.init();

var articleRouter = require('./Routes/articleRoutes')(taskDao);
app.use('/api/articles', articleRouter); 
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
    res.send('EM.Cloud.AdventureHop API');
});

app.listen(port, function(){
    console.log('Gulp is running my app on  PORT: ' + port);
});

module.exports = app;