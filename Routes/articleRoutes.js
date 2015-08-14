var express = require('express');


var routes = function(itemDao){
    
    console.log("routes");
    var self = this;
    self.itemDao = itemDao;
    var articleRouter = express.Router();
    var articleController = require('../Controllers/articleController')(itemDao);
    
    articleRouter.route('/')
        .post(articleController.post)
        .get(articleController.get);

    
    articleRouter.use('/:Id', function(req,res,next){
        console.log("get By Id");
        self.itemDao.getItem(req.params.Id, function(err, item){
            
            if(err)
                res.status(500).send(err);
            else if(item)
            {
                res.json(item);
            }
            else
            {
                res.status(404).send('No item found');
            }
            
        }); 
    });
    
    articleRouter.route('/:Id').get(function(req,res){
            var returnItem = req.item.toJSON();

            returnItem.links = {};
            var newLink = 'http://' + req.headers.host + '/api/articles/?category=' + returnItem.category;
            returnItem.links.FilterByThisCategory = newLink.replace(' ', '%20');
            res.json(returnItem);

        });
        
    return articleRouter;
};

module.exports = routes;