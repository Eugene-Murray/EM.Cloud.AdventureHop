var express = require('express');


var routes = function(Book){
    var articleRouter = express.Router();

    var bookController = require('../Controllers/articleController')(Book)
    bookRouter.route('/')
        .post(articleController.post)
        .get(articleController.get);

    bookRouter.use('/:articleId', function(req,res,next){
        Book.findById(req.params.bookId, function(err,book){
            if(err)
                res.status(500).send(err);
            else if(book)
            {
                req.book = book;
                next();
            }
            else
            {
                res.status(404).send('no article found');
            }
        });
    });
    bookRouter.route('/:articleId')
        .get(function(req,res){

            var returnArticle = req.article.toJSON();

            returnArticle.links = {};
            var newLink = 'http://' + req.headers.host + '/api/articles/?genre=' + returnArticle.genre;
            returnArticle.links.FilterByThisGenre = newLink.replace(' ', '%20');
            res.json(returnBook);

        })
        .put(function(req,res){
            req.article.title = req.body.title;
            req.article.author = req.body.author;
            req.article.genre = req.body.genre;
            req.article.read = req.body.read;
            req.article.save(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.json(req.article);
                }
            });
        })
        .patch(function(req,res){
            if(req.body._id)
                delete req.body._id;

            for(var p in req.body)
            {
                req.article[p] = req.body[p];
            }

            req.book.save(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.json(req.article);
                }
            });
        })
        .delete(function(req,res){
            req.article.remove(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.status(204).send('Removed');
                }
            });
        });
    return articleRouter;
};

module.exports = routes;