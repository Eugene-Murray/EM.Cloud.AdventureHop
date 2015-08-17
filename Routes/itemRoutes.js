var express = require('express');


var routes = function(itemDao){
    
    console.log("routes");
    var self = this;
    self.itemDao = itemDao;
    var itemRouter = express.Router();
    var itemController = require('../Controllers/itemController')(itemDao);
    
    itemRouter.route('/')
        .post(itemController.post)
        .get(itemController.get);

    
    itemRouter.use('/:Id', function(req,res,next){
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
    
    itemRouter.route('/:Id').get(function(req,res){
            var returnItem = req.item.toJSON();

            returnItem.links = {};
            var newLink = 'http://' + req.headers.host + '/api/items/?category=' + returnItem.category;
            returnItem.links.FilterByThisCategory = newLink.replace(' ', '%20');
            res.json(returnItem);

        });
        
    return itemRouter;
};

module.exports = routes;