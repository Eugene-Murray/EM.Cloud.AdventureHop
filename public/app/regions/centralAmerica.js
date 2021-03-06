define(['knockout', 'text!regions/central-america.html'], function(ko, templateString) {

	function CentralAmerica(params) { 
	
		 $('.active-slide-btn').removeClass('active-slide-btn');
        $('#navigation-panel').removeClass('open');
        $('html').removeClass('slide-active');
        $('#page').removeClass('page-off');
		
		self.articles = ko.observableArray([]);

        $.get("/api/articles/region/north_america", function(data) {

            self.articles(data.items);

            console.log(self.articles());
        });		
	
	}

	return { template: templateString, viewModel: CentralAmerica };
});