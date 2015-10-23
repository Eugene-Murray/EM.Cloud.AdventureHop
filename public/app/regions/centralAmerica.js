define(['knockout', 'text!regions/central-america.html'], function(ko, templateString) {

	function CentralAmerica(params) { 
	
		$("#navigation-panel").removeClass("open");
		
		self.articles = ko.observableArray([]);

        $.get("https://emcloudadventurehop-eugene-murray.c9.io/api/articles/region/north_america", function(data) {

            self.articles(data.items);

            console.log(self.articles());
        });		
	
	}

	return { template: templateString, viewModel: CentralAmerica };
});