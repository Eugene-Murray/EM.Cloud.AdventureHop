var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


var db;
console.log('Start app.js');
if(process.env.ENV == 'Test'){

    db = mongoose.connect('mongodb://' + process.env.IP + '/itemsAPI_test');
}

else{
    db= mongoose.connect('mongodb://' + process.env.IP + '/itemsAPI');
}

var Book = require('./models/itemsModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

itemRouter = require('./Routes/itemRoutes')(Book);


app.use('/api/items', itemRouter); 

// Looks for static content under the current directory + /public:
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
    res.send('EM.Cloud.AdventureHop API');
});

app.listen(port, function(){
    console.log('Gulp is running my app on  PORT: ' + port);
});

module.exports = app;