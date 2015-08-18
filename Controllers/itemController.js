var itemController = function(itemDao) {
    var self = this;
    self.itemDao = itemDao;


    var post = function(req, res) {
        console.log("post");
        
        var item = req.body;
        console.log(item);

        if(req.body.documentType != "CONFIG"){
            
            if(!req.body.title)
                console.log("ERROR - title is required");
                res.status(400);
                res.send('title is required');
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

    var get = function(req, res) {
        console.log("get");

        var querySpec = {
            // query: 'SELECT * FROM root r WHERE r.completed=@completed',
            // parameters: [{
            //     name: '@completed',
            //     value: false
            // }]
            query: 'SELECT * FROM root r'
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

    return {
        post: post,
        get: get
    }
}

module.exports = itemController;