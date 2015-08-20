define(['knockout'], function(ko) {

	function Article(args) { 
	   var self = this;
			self.id = ko.observable();
			self.softDelete = ko.observable();
            self.documentType = ko.observable();
            self.siteSection = ko.observable();
            self.articleType = ko.observable();
            self.region = ko.observable();
            self.regionUrl = ko.observable();
            self.nameofAuthor = ko.observable();
            self.date = ko.observable(); 
            self.title = ko.observable();
            self.description = ko.observable();
            self.carouselImages = ko.observableArray([]);
            self.imageUrl = ko.observable();
            self.videoUrl = ko.observable();
            self.htmlContent = ko.observable();
            self.comments = ko.observableArray([]);
            self.tags = ko.observableArray([]);   
	}

	return Article;
});