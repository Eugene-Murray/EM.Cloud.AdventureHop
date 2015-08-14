var express = require('express');


var routes = function(taskDao){
    console.log("routes");
    var articleRouter = express.Router();
    var articleController = require('../Controllers/articleController')(taskDao);
    
    articleRouter.route('/')
        .post(articleController.post)
        .get(articleController.get);

    
    articleRouter.use('/:articleId', function(req,res,next){
        console.log("get By Id");
    });
    

    return articleRouter;
};

module.exports = routes;