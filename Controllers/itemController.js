var itemController = function(itemDao) {
    var self = this;
    self.itemDao = itemDao;

    var getAllHomePageArticles = function(req, res) {
        console.log("itemController.get");
        
        var querySpec = {
            query: 'SELECT * FROM root r WHERE r.showOnHomePage=@showOnHomePage AND r.documentType=@documentType',
            parameters: [{
                name: '@showOnHomePage',
                value: true
            },
            {
                name: '@documentType',
                value: 'CONTENT'
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

    }

    var post = function(req, res) {
        console.log("itemController.post");
        var item = req.body;
        console.log(item);

        if(req.body.documentType != "CONTENT")
        {
                console.log("ERROR - documentType is not CONTENT");
                res.status(400);
                res.send('ERROR - documentType is not CONTENT');
        }
            
            
        if(!req.body.title){
                console.log("ERROR - title is required");
                res.status(400);
                res.send('ERROR - title is required');
        }
        else 
        {
            self.itemDao.addItem(item, function(err, item) {
            if (err) {
                throw (err);
            }
                res.status(201);
                res.send(item);
            });
        }
        
    }
    
    var getById = function(req, res) {
            console.log("/articles/:Id - get...");
            
            var itemId = req.params.Id;
            
            self.itemDao.getItemById(itemId, function(err, item){
                if (err) {
                    throw (err);
                }
                res.status(201);
                res.send(item);
            });
    }
    
    var getAllRegionArticles = function(req, res) {
            console.log("/articles/:Region - get...");
            
            var region = req.params.Region;
            
            var querySpec = {
            query: 'SELECT * FROM root r WHERE r.region=@region',
            parameters: [{
                name: '@region',
                value: region
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
    }
    
    var putById = function(req,res){
        console.log("/articles/:Id - put...");
        var itemId = req.params.Id;
        var updatedItem = req.body;
            
        self.itemDao.updateItem(itemId, updatedItem, function(err, items) {
            res.status(201);
            res.send(updatedItem);
        });    
    }
    
    var deleteById = function(req,res){
            console.log("/articles/:Id - delete... not yet implenteded");
    }   

    return {
        getAllHomePageArticles: getAllHomePageArticles,
        post: post,
        getById: getById,
        getAllRegionArticles: getAllRegionArticles,
        putById: putById,
        deleteById: deleteById
    }
}

module.exports = itemController;