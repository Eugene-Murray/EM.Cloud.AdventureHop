var express = require('express');


var routes = function(itemDao) {

    console.log("routes");
    var self = this;
    self.itemDao = itemDao;
    var itemRouter = express.Router();
    var itemController = require('../Controllers/itemController')(itemDao);

    itemRouter.route('/')
        .post(itemController.post)
        .get(itemController.get);

    itemRouter.use('/:Site/:Section/:Region', function(req, res, next) {
        console.log("get By /:Site/:Section/:Region");

        var args = {
            site: req.params.Site,
            section: req.params.Section,
            region: req.params.Region
        };
        console.log(args);


        var querySpec = {
            query: 'SELECT * FROM root r WHERE r.site=@site AND r.siteSection=@section AND r.region=@region',
            parameters: [{
                name: '@site',
                value: args.site
            }, {
                name: '@section',
                value: args.section
            }, {
                name: '@region',
                value: args.region
            }]
        };

        self.itemDao.find(querySpec, function(err, items) {
            if (err) {
                throw (err);
            }
            res.json({
                items: items
            });
        });

    });
    
    // itemRouter.use('/Config', function(req, res, next) {
    //     console.log("get Config");
    //     // self.itemDao.getConfig(req.params.Id, function(err, item) {

    //     //     if (err)
    //     //         res.status(500).send(err);
    //     //     else if (item) {
    //     //         res.json(item);
    //     //     }
    //     //     else {
    //     //         res.status(404).send('No config found');
    //     //     }

    //     // });
        
    //     var querySpec = {
    //         query: 'SELECT * FROM root r WHERE r.documentType=@documentType',
    //         parameters: [{
    //             name: '@documentType',
    //             value: 'CONFIG'
    //         }]
    //     };

    //     self.itemDao.find(querySpec, function(err, items) {
    //         if (err) {
    //             throw (err);
    //         }
    //         res.json({
    //             items: items
    //         });
    //     });
        
    // });

    // itemRouter.use('/:Id', function(req, res, next) {
    //     console.log("get By Id");
    //     console.log(req.params);
    //     self.itemDao.getItemById(req.params.Id, function(err, item) {

    //         if (err)
    //             res.status(500).send(err);
    //         else if (item) {
    //             res.json(item);
    //         }
    //         else {
    //             res.status(404).send('No item found');
    //         }

    //     });
    // });
    
    itemRouter.route('/:Id')
        .get(function(req, res) {
            config.console("get id link");
            var returnItem = req.item.toJSON();

            returnItem.links = {};
            var newLink = 'http://' + req.headers.host + '/api/articles/?site=' + returnItem.site;
            returnItem.links.FilterByThisSite = newLink.replace(' ', '%20');
            res.json(returnItem);

        }).put(function(req,res){
            console.log("put...");
           var updateItem = req.body;
           console.log(updateItem); 
           console.log(self.itemDao);
           
        //   self.itemDao.updateItem(req.params.Id, updateItem,function(err, items) 
        //   {
        //         if (err) {
        //             throw (err);
        //         }
        //         res.status(201);
        //         res.send(updateItem);
        //     });
           
        });

    // .patch(function(req,res){
    //     if(req.body._id)
    //         delete req.body._id;

    //     for(var p in req.body)
    //     {
    //         req.book[p] = req.body[p];
    //     }

    //     req.book.save(function(err){
    //         if(err)
    //             res.status(500).send(err);
    //         else{
    //             res.json(req.book);
    //         }
    //     });
    // })
    // .delete(function(req,res){
    //     req.book.remove(function(err){
    //         if(err)
    //             res.status(500).send(err);
    //         else{
    //             res.status(204).send('Removed');
    //         }
    //     });
    // });


    return itemRouter;
};

module.exports = routes;