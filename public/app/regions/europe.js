define(['knockout', 'text!regions/europe.html'], function(ko, templateString) {

	function Europe(params) { 
	
		$("#navigation-panel").removeClass("open");
		
		self.articles = ko.observableArray([]);

        $.get("https://emcloudadventurehop-eugene-murray.c9.io/api/articles/region/north_america", function(data) {

            self.articles(data.items);

            console.log(self.articles());
        });	
		
	}

	return { template: templateString, viewModel: Europe };
});