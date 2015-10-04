define(['knockout', 'text!regions/north-america.html'], function(ko, templateString) {

	function NorthAmerica(params) { 
	
		self.articles = ko.observableArray([]);

        $.get("https://emcloudadventurehop-eugene-murray.c9.io/api/articles/region/north_america", function(data) {

            self.articles(data.items);

            console.log(self.articles());
        });	
	
	}

	return { template: templateString, viewModel: NorthAmerica };
});