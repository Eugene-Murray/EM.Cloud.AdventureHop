var DocumentDBClient = require('documentdb').DocumentClient;
var docdbUtils = require('./docDBUtils');

function ItemDao(documentDBClient, databaseId, collectionId) {
  this.client = documentDBClient;
  this.databaseId = databaseId;
  this.collectionId = collectionId;

  this.database = null;
  this.collection = null;
}

ItemDao.prototype = {
  init: function(callback) {
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
    var self = this;

    self.client.queryDocuments(self.collection._self, querySpec).toArray(function(err, results) {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  addItem: function(item, callback) {
    console.log("dao");
    var self = this;
    item.date = Date.now();
    item.show = true;
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

  updateItem: function(itemId, newItem, callback) {
    var self = this;

    self.getItem(itemId, function(err, doc) {
      if (err) {
        console.log("err");
        console.log(err);
        callback(err);
      } else {
        doc = newItem;
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

  getItemById: function(itemId, callback) {
    var self = this;
    console.log("Get Item By Id");
    
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
  
  getItemsBySite: function(siteName, callback) {
    var self = this;
    console.log("Get Item By Site");
    
    var querySpec = {
      query: 'SELECT * FROM root r WHERE r.siteName=@siteName',
      parameters: [{
        name: '@siteName',
        value: siteName
      }]
    };

    self.client.queryDocuments(self.collection._self, querySpec).toArray(function(err, results) {
      if (err) {
        callback(err);
      } else {
        callback(null, results[0]);
      }
    });
  } //,
  
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

module.exports = ItemDao;
