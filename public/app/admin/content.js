define(['knockout', 'knockout-mapping', 'Article', 'text!content.html'], function(ko, koMap, Article, templateString) {

	function Content(params) { 
		var self = this;
		self.config = {
			siteSections : ko.observableArray(),
			regions : ko.observableArray(),
			articleTypes : ko.observableArray()
			};
			self.articles = ko.observableArray([]);
		
		self.load();
	}
	
	Content.prototype.load = function() {
		var self = this;
		$.get("https://emcloudadventurehop-eugene-murray.c9.io/api/config", function(data) {
            console.log("Content - get config");
            var regions = [];
            var index1 = 0;
            for(var p in data.regions)
            {
            	regions[index1] = p;
            	index1++;
            }
            self.config.regions(regions);
            
            var siteSections = [];
            var index2 = 0;
            for(var p in data.siteSection)
            {
            	siteSections[index2] = p;
            	index2++;
            }
            self.config.siteSections(siteSections);
            
            var articleTypes = [];
            var index3 = 0;
            for(var p in data.articleTypes)
            {
            	articleTypes[index3] = p;
            	index3++;
            }
            self.config.articleTypes(articleTypes);
        });
        
        $.get("https://emcloudadventurehop-eugene-murray.c9.io/api/articles", function(data) {
            console.log("Content - get all articles");
            var articles = [];
            $.each(data.items, function( index, item ) {
  				
  					var article = new Article();
  					article.id(item.id);
					article.softDelete(item.softDelete);
		            article.documentType(item.documentType);
		            article.siteSection(item.siteSection);
		            article.articleType(item.articleType);
		            article.region(item.region);
		            article.regionUrl(item.regionUrl);
		            article.nameofAuthor(item.nameofAuthor);
		            article.date(item.date); 
		            article.title(item.title);
		            article.description(item.description);
		            article.imageUrl(item.imageUrl);
		            article.videoUrl(item.videoUrl);
		            article.htmlContent(item.htmlContent);
		            //self.article.carouselImages: ko.observableArray([]),
		            //self.article.comments: ko.observableArray([]),
		            //self.article.tags: ko.observableArray([])

  					articles[index] = article;
			});
			
			self.articles(articles);
            
        });
		
	};

	return { template: templateString, viewModel: Content };
});