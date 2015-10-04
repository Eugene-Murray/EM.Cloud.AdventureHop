define(['knockout', 'text!regions/asia.html'], function(ko, templateString) {

	function Asia(params) { 
	
        self.articles = ko.observableArray([]);

        $.get("https://emcloudadventurehop-eugene-murray.c9.io/api/articles/region/north_america", function(data) {

            self.articles(data.items);

            console.log(self.articles());
        });	
	
	}

	return { template: templateString, viewModel: Asia };
});