var configController = function(configDao) {
    console.log("configController");
    var self = this;
    self.configDao = configDao;

    var get = function(req, res) {
        console.log("configController.get()");
        
        var configId = req.params.Id;
            
            self.documentDBDao.getConfig(configId, function(err, item){
                if (err) {
                    throw (err);
                }
                res.status(201);
                res.send(item);
            });
    }

    
    var put = function(req, res) {
        console.log("configController.put()");
        
        var configId = req.params.Id;
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