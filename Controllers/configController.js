var configController = function(configDao) {
    console.log("configController");
    var self = this;
    self.configDao = configDao;

    var get = function(req, res) {
        console.log("configController.get");
    }

    var post = function(req, res) {
        console.log("configController.post");
    }
    
    var put = function(req, res) {
        console.log("configController.put");
    }

    return {
        get: get,
        post: post,
        put: put
    }
}

module.exports = configController;