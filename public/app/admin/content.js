define(['knockout', 'knockout-mapping', 'underscore', 'Article', 'text!content.html'], function(ko, koMap, _, Article, templateString) {

	function Content(params) { 
		var self = this;
		self.config = {
			siteSections : ko.observableArray(),
			regions : ko.observableArray(),
			articleTypes : ko.observableArray()
			};
		
		self.load();
		console.log(Content.prototype.articleToEdit.title());
	}
	
	// Properties
	Content.prototype.articles = ko.observableArray([]);
	Content.prototype.articleToEdit = new Article();
	
	// Functions
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
		            article.carouselImages(item.carouselImages),
		            article.comments(item.comments),
		            article.tags(item.tags)

  					articles[index] = article;
			});
			
			self.articles(articles);
            
        });
		
	};
	
	Content.prototype.onClick_EditArticle = function(selectedArticle, event) {
	   // var articles = Content.prototype.articles();
	   // var article = _.find(articles, function(article) {
    //         return article.id() == selectedArticle.id();
    //     });
    
        Content.prototype.articleToEdit.title(selectedArticle.title());
        Content.prototype.articleToEdit.nameofAuthor(selectedArticle.nameofAuthor());
        Content.prototype.articleToEdit.description(selectedArticle.description());
        Content.prototype.articleToEdit.regionUrl(selectedArticle.regionUrl());
        Content.prototype.articleToEdit.date(selectedArticle.date());
        Content.prototype.articleToEdit.imageUrl(selectedArticle.imageUrl());
        Content.prototype.articleToEdit.videoUrl(selectedArticle.videoUrl());
        Content.prototype.articleToEdit.htmlContent(selectedArticle.htmlContent());
        Content.prototype.articleToEdit.carouselImages(selectedArticle.carouselImages()),
		Content.prototype.articleToEdit.comments(selectedArticle.comments()),
		Content.prototype.articleToEdit.tags(selectedArticle.tags())
        
	};

	Content.prototype.onClick_Save = function(){
		console.log("ContentVM :: on");
		
		console.log(this.articleToEdit.title());
	};

	return { template: templateString, viewModel: Content };
});