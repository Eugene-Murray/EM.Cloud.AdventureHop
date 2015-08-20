var DocumentDBClient = require('documentdb').DocumentClient;
var docdbUtils = require('./docDBUtils');

function documentDBDao(documentDBClient, databaseId, collectionId) {
  this.client = documentDBClient;
  this.databaseId = databaseId;
  this.collectionId = collectionId;

  this.database = null;
  this.collection = null;
}

documentDBDao.prototype = {
  init: function(callback) {
    console.log("documentDBDao.init()");
    var self = this;

    docdbUtils.getOrCreateDatabase(self.client, self.databaseId, function(err, db) {
      if (err) {
        callback(err);
      }

      self.database = db;
      docdbUtils.getOrCreateCollection(self.client, self.database._self, self.collectionId, function(err, coll) {
        if (err) {
          callback(err);
        }
        self.collection = coll;
      });
    });
  },

  find: function(querySpec, callback) {
    console.log("documentDBDao.find()");
    var self = this;

    self.client.queryDocuments(self.collection._self, querySpec).toArray(function(err, results) {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  
  getItemById: function(itemId, callback) {
    console.log("documentDBDao.getItemById()");
    var self = this;

    var querySpec = {
      query: 'SELECT * FROM root r WHERE r.id=@id',
      parameters: [{
        name: '@id',
        value: itemId
      }]
    };

    self.client.queryDocuments(self.collection._self, querySpec).toArray(function(err, results) {
      if (err) {
        callback(err);
      } else {
        callback(null, results[0]);
      }
    });
  },

  addItem: function(item, callback) {
    console.log("documentDBDao.addItem()");
    var self = this;
    item.date = Date.now();
    item.softDelete = falase;
    self.client.createDocument(self.collection._self, item, function(err, doc) {
      if (err) {
        console.log("dao - error");
        callback(err);
      } else {
        console.log("dao - saved");
        callback(null);
      }
    });
  },

  updateItem: function(itemId, updatedItem, callback) {
    console.log("documentDBDao.updateItem()");
    var self = this;

    self.getItemById(itemId, function(err, doc) {
      if (err) {
        console.log("err");
        console.log(err);
        callback(err);
      } else {
        doc = updatedItem;
        self.client.replaceDocument(doc._self, doc, function(err, replaced) {
          if (err) {
            callback(err);
          } else {
            callback(null);
          }
        });
      }
    });
  },
  
  softDelete: function(itemId, callback) {
    console.log("documentDBDao.softDelete()");
    var self = this;

    self.getItemById(itemId, function(err, doc) {
      if (err) {
        console.log("err");
        console.log(err);
        callback(err);
      } else {
        doc.softDelete = true;
        self.client.replaceDocument(doc._self, doc, function(err, replaced) {
          if (err) {
            callback(err);
          } else {
            callback(null);
          }
        });
      }
    });
  },

  getConfig: function(configId, callback) {
    console.log("documentDBDao.getConfig()");
    var self = this;

    self.getItemById(configId, function(err, doc) {
          if (err) {
            callback(err);
          } else {
            callback(null, doc);
          }
     });
  }
  
  
  
  // itemRouter.use('/:Site/:Section/:Region', function(req, res, next) {
    //     console.log("get By /:Site/:Section/:Region");

    //     var args = {
    //         site: req.params.Site,
    //         section: req.params.Section,
    //         region: req.params.Region
    //     };
    //     console.log(args);


    //     var querySpec = {
    //         query: 'SELECT * FROM root r WHERE r.site=@site AND r.siteSection=@section AND r.region=@region',
    //         parameters: [{
    //             name: '@site',
    //             value: args.site
    //         }, {
    //             name: '@section',
    //             value: args.section
    //         }, {
    //             name: '@region',
    //             value: args.region
    //         }]
    //     };

    //     self.itemDao.find(querySpec, function(err, items) {
    //         if (err) {
    //             throw (err);
    //         }
    //         res.json({
    //             items: items
    //         });
    //     });

    // });
    
    // itemRouter.use('/Config', function(req, res, next) {
    //     console.log("get Config");
    //     // self.itemDao.getConfig(req.params.Id, function(err, item) {

    //     //     if (err)
    //     //         res.status(500).send(err);
    //     //     else if (item) {
    //     //         res.json(item);
    //     //     }
    //     //     else {
    //     //         res.status(404).send('No config found');
    //     //     }

    //     // });
        
    //     var querySpec = {
    //         query: 'SELECT * FROM root r WHERE r.documentType=@documentType',
    //         parameters: [{
    //             name: '@documentType',
    //             value: 'CONFIG'
    //         }]
    //     };

    //     self.itemDao.find(querySpec, function(err, items) {
    //         if (err) {
    //             throw (err);
    //         }
    //         res.json({
    //             items: items
    //         });
    //     });
        
    // });

    // itemRouter.use('/:Id', function(req, res, next) {
    //     console.log("get By Id");
    //     console.log(req.params);
    //     self.itemDao.getItemById(req.params.Id, function(err, item) {

    //         if (err)
    //             res.status(500).send(err);
    //         else if (item) {
    //             res.json(item);
    //         }
    //         else {
    //             res.status(404).send('No item found');
    //         }

    //     });
    // });
    
    // itemRouter.route('/:Id')
    //     .get(function(req, res) {
    //         config.console("get id link");
    //         var returnItem = req.item.toJSON();

    //         returnItem.links = {};
    //         var newLink = 'http://' + req.headers.host + '/api/articles/?site=' + returnItem.site;
    //         returnItem.links.FilterByThisSite = newLink.replace(' ', '%20');
    //         res.json(returnItem);

    //     }).put(function(req,res){
    //         console.log("put...");
    //       var updateItem = req.body;
    //       console.log(updateItem); 
    //       console.log(self.itemDao);
           
    //     //   self.itemDao.updateItem(req.params.Id, updateItem,function(err, items) 
    //     //   {
    //     //         if (err) {
    //     //             throw (err);
    //     //         }
    //     //         res.status(201);
    //     //         res.send(updateItem);
    //     //     });
           
    //     });

    // .patch(function(req,res){
    //     if(req.body._id)
    //         delete req.body._id;

    //     for(var p in req.body)
    //     {
    //         req.book[p] = req.body[p];
    //     }

    //     req.book.save(function(err){
    //         if(err)
    //             res.status(500).send(err);
    //         else{
    //             res.json(req.book);
    //         }
    //     });
    // })
    // .delete(function(req,res){
    //     req.book.remove(function(err){
    //         if(err)
    //             res.status(500).send(err);
    //         else{
    //             res.status(204).send('Removed');
    //         }
    //     });
    // });
  
  // getItemsBySite: function(siteName, callback) {
  //   var self = this;
  //   console.log("Get Item By Site");
    
  //   var querySpec = {
  //     query: 'SELECT * FROM root r WHERE r.siteName=@siteName',
  //     parameters: [{
  //       name: '@siteName',
  //       value: siteName
  //     }]
  //   };

  //   self.client.queryDocuments(self.collection._self, querySpec).toArray(function(err, results) {
  //     if (err) {
  //       callback(err);
  //     } else {
  //       callback(null, results[0]);
  //     }
  //   });
  // } //,
  
  // getItemsBySiteSectionRegion: function(args, callback) {
  //   var self = this;
  //   console.log("Get ItemsBySiteSectionRegion");
    
  //   var querySpec = {
  //     query: 'SELECT * FROM root r WHERE r.site=@site AND r.siteSection=@section AND r.region=@region',
  //     parameters: [{
  //       name: '@site',
  //       value: args.site
  //     },
  //     {
  //       name: '@section',
  //       value: args.section
  //     },
  //     {
  //       name: '@region',
  //       value: args.region
  //     }]
  //   };

  //   self.client.queryDocuments(self.collection._self, querySpec).toArray(function(err, results) {
  //     if (err) {
  //       callback(err);
  //     } else {
        
  //       console.log(results);
        
  //       callback(null, results[0]);
  //     }
  //   });
  // }
  
};

module.exports = documentDBDao;
