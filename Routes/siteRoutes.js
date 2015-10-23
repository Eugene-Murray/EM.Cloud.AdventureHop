var express = require('express');


var routes = function(documentDBDao) {
    console.log("routes");
    var siteRouter = express.Router();
    var itemController = require('../Controllers/itemController')(documentDBDao);
    var configController = require('../Controllers/configController')(documentDBDao);

    // https://emcloudadventurehop-eugene-murray.c9.io/api/articles 
    siteRouter.route('/articles')
        //.get(itemController.getAllHomePageArticles) // get all for home page
        .get(itemController.getAllArticles)
        .post(itemController.post); // save new
     
    // siteRouter.route('/articles/Section/:Section') 
    //     .get(itemController.getAllArticlesBySection)
    
    // https://emcloudadventurehop-eugene-murray.c9.io/api/articles/519be2ff-876a-53e9-3b52-2cb1db3feb7d    
    siteRouter.route('/articles/:Id')
        .get(itemController.getById)
        .put(itemController.putById)
        .delete(itemController.deleteById);   
        
    // https://emcloudadventurehop-eugene-murray.c9.io/api/articles/ADVENTURE_HOP/REGION/NORTH_AMERICA    
    siteRouter.route('/articles/Region/:Region')
        .get(itemController.getAllRegionArticles);
        
        
    // https://emcloudadventurehop-eugene-murray.c9.io/api/config     
    siteRouter.route('/config')
      .get(configController.get) 
      .put(configController.put);    

    return siteRouter;
};

module.exports = routes;