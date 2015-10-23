define(['knockout', 'text!regions/asia.html'], function(ko, templateString) {

	function Asia(params) { 
	    
	    $("#navigation-panel").removeClass("open");
	
        self.articles = ko.observableArray([]);

        $.get("/api/articles/region/north_america", function(data) {

            self.articles(data.items);

            console.log(self.articles());
        });	
	
	}

	return { template: templateString, viewModel: Asia };
});