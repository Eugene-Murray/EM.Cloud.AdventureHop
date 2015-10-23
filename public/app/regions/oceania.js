define(['knockout', 'text!regions/oceania.html'], function(ko, templateString) {

	function Oceania(params) { 
	
		$("#navigation-panel").removeClass("open");
		
		self.articles = ko.observableArray([]);

        $.get("/api/articles/region/north_america", function(data) {

            self.articles(data.items);

            console.log(self.articles());
        });	
		
	}

	return { template: templateString, viewModel: Oceania };
});