var itemController = function(documentDBDao) {
    var self = this;
    self.documentDBDao = documentDBDao;

    var getAllArticles = function(req, res) {
        console.log("itemController.getAllArticles");
        
        var querySpec = {
            query: 'SELECT * FROM root r'
        };

        self.documentDBDao.find(querySpec, function(err, items) {
            if (err) {
                throw (err);
            }
            res.json({
                items: items
            });
        });

    }

    // var getAllHomePageArticles = function(req, res) {
    //     console.log("itemController.get");
        
    //     var querySpec = {
    //         // query: 'SELECT * FROM root r WHERE r.showOnHomePage=@showOnHomePage AND r.documentType=@documentType AND r.softDelete=@softDelete',
    //         // parameters: [{
    //         //     name: '@showOnHomePage',
    //         //     value: true
    //         // },
    //         query: 'SELECT * FROM root r WHERE r.documentType=@documentType AND r.softDelete=@softDelete',
    //         parameters: [{
    //             name: '@documentType',
    //             value: 'CONTENT'
    //         },
    //         {
    //             name: '@softDelete',
    //             value: false
    //         }]
    //     };

    //     self.documentDBDao.find(querySpec, function(err, items) {
    //         if (err) {
    //             throw (err);
    //         }
    //         res.json({
    //             items: items
    //         });
    //     });

    // }

    var post = function(req, res) {
        console.log("itemController.post");
        var item = req.body;
        console.log(item);

        if(!req.body.title){
                console.log("ERROR - title is required");
                res.status(400);
                res.send('ERROR - title is required');
        }
        else 
        {
            self.documentDBDao.addItem(item, function(err, item) {
            if (err) {
                console.warn(err);
                throw (err);
            }
                console.warn(res);
                res.status(200);
                res.send(item);
            });
        }
        
    }
    
    var getById = function(req, res) {
            console.log("/articles/:Id - get...");
            
            var itemId = req.params.Id;
            
            self.documentDBDao.getItemById(itemId, function(err, item){
                if (err) {
                    throw (err);
                }
                res.status(201);
                res.send(item);
            });
    }
    
    var getAllRegionArticles = function(req, res) {
            console.log("/articles/Region:Region - get...");
            
            var region = req.params.Region;
            
            var querySpec = {
            query: 'SELECT * FROM root r WHERE r.region=@region AND r.documentType=@documentType AND r.softDelete=@softDelete',
            parameters: [{
                name: '@region',
                value: region
            },
            {
                name: '@documentType',
                value: 'CONTENT'
            },
            {
                name: '@softDelete',
                value: false
            }]
        };

        self.documentDBDao.find(querySpec, function(err, items) {
            if (err) {
                throw (err);
            }
            res.json({
                items: items
            });
        });
    }
    
    var putById = function(req,res){
        console.log("/articles/:Id - put...");
        var itemId = req.params.Id;
        var updatedItem = req.body;
            
        self.documentDBDao.updateItem(itemId, updatedItem, function(err, items) {
            res.status(201);
            res.send(updatedItem);
        });    
    }
    
    var deleteById = function(req,res){
         console.log("/articles/:Id - delete...");
            
        var itemId = req.params.Id;
            
        self.documentDBDao.softDeleteItem(itemId, null, function(err, items) {
            res.status(201);
            res.send(updatedItem);
        });    
    }   

    return {
        //getAllHomePageArticles: getAllHomePageArticles,
        getAllArticles: getAllArticles,
        post: post,
        getById: getById,
        getAllRegionArticles: getAllRegionArticles,
        putById: putById,
        deleteById: deleteById
    }
}

module.exports = itemController;