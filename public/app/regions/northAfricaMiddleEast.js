define(['knockout', 'text!regions/north-africa-middle-east.html'], function(ko, templateString) {

	function NorthAfricaMiddleEast(params) { 
	
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

	return { template: templateString, viewModel: NorthAfricaMiddleEast };
});