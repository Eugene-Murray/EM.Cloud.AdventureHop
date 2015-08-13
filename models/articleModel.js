var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var articleModel = new Schema({
    title: {type: String},
    description : {type: String},
    author: {type: String},
    section: {type: String},
    imageUrl: {type: String},
    show: {type: Boolean, default:true}
});

module.exports= mongoose.model('Article', articleModel);