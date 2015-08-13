var articlesController = function(Article){

    var post = function(req, res){
        var book = new Article(req.body);

        if(!req.body.title){
            res.status(400);
            res.send('Title is required');
        }
        else {
            article.save();
            res.status(201);
            res.send(article);
        }
    }

    var get = function(req,res){

        var query = {};

        if(req.query.genre)
        {
            query.genre = req.query.genre;
        }
        Article.find(query, function(err,articles){

            if(err)
                res.status(500).send(err);
            else {

                var returnArticles = [];
                articles.forEach(function(element, index, array){
                    var newArticle = element.toJSON();
                    newArticle.links= {};
                    newArticle.links.self = 'http://' + req.headers.host + '/api/articles/' + newArticle._id
                    returnArticles.push(newArticle);
                });
                res.json(returnArticles);
            }
        });
    }

    return {
        post: post,
        get:get
    }
}

module.exports = articlesController;