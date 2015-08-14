var articlesController = function(taskDao) {
    var self = this;
    self.taskDao = taskDao;


    var post = function(req, res) {
        console.log("post");
    }

    var get = function(req, res) {
        console.log("get");

        var querySpec = {
            query: 'SELECT * FROM root r WHERE r.completed=@completed',
            parameters: [{
                name: '@completed',
                value: false
            }]
        };

        self.taskDao.find(querySpec, function(err, items) {
            if (err) {
                throw (err);
            }
            res.json({
                tasks: items
            });
        });

    }

    return {
        post: post,
        get: get
    }
}

module.exports = articlesController;