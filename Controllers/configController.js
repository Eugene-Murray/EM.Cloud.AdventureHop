var configController = function(configDao) {
    console.log("configController");
    var self = this;
    self.configDao = configDao;

    var get = function(req, res) {
        console.log("configController.get()");
        
        var configId = "2593f816-deff-8032-9469-21a7cca5ee50";
            
            self.documentDBDao.getConfig(configId, function(err, item){
                if (err) {
                    console.log("ERROR: " + err);
                    res.status(400);
                    res.send("ERROR: " + err);
                }
                res.status(201);
                res.send(item);
            });
    }

    
    var put = function(req, res) {
        console.log("configController.put()");
        
        var configId = "2593f816-deff-8032-9469-21a7cca5ee50";
        var updatedConfig = req.body;
            
        self.documentDBDao.updateItem(configId, updatedConfig, function(err, items) {
            res.status(201);
            res.send(updatedConfig);
        });    
    }

    return {
        get: get,
        put: put
    }
}

module.exports = configController;