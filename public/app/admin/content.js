define(['knockout', 'knockout-mapping', 'underscore', 'Article', 'text!content.html'], function(ko, koMap, _, Article, templateString) {

	function Content(params) { 
		var self = this;
		self.articles = ko.observableArray([]);
		self.articleToEdit = new Article();
		self.config = {
			siteSections : ko.observableArray(),
			regions : ko.observableArray(),
			articleTypes : ko.observableArray()
			};
		
		self.load();
		
	}
	
	// Properties
	
	
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
    
        this.articleToEdit.title(selectedArticle.title());
        this.articleToEdit.nameofAuthor(selectedArticle.nameofAuthor());
        this.articleToEdit.description(selectedArticle.description());
        this.articleToEdit.regionUrl(selectedArticle.regionUrl());
        this.articleToEdit.date(selectedArticle.date());
        this.articleToEdit.imageUrl(selectedArticle.imageUrl());
        this.articleToEdit.videoUrl(selectedArticle.videoUrl());
        this.articleToEdit.htmlContent(selectedArticle.htmlContent());
        this.articleToEdit.carouselImages(selectedArticle.carouselImages()),
		this.articleToEdit.comments(selectedArticle.comments()),
		this.articleToEdit.tags(selectedArticle.tags())
        
	};

	Content.prototype.onClick_Save = function(){
		console.log("ContentVM ::onClick_Save");
		
		console.warn(ko.toJSON(this.articleToEdit));
		
		$.ajax({
		    url: 'https://emcloudadventurehop-eugene-murray.c9.io/api/articles',
		    dataType: "json",
		    type: "POST",
		    contentType: 'application/json; charset=utf-8',
		    data: ko.toJSON(this.articleToEdit),
		    async: true,
		    processData: false,
		    cache: false,
		    success: function (data) {
		    	console.warn("!!!!!!!!!!!!!!!!!!!");
		        console.warn(data.payload);
		        this.load();
		    },
		    error: function (xhr) {
		        console.warn(">>>>>>>>>>>>>");
		        console.warn(xhr);
		        
		        this.load();
		    }
		});
		
	};

	return { template: templateString, viewModel: Content };
});