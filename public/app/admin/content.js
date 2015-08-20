define(['knockout', 'knockout-mapping', 'text!content.html'], function(ko, koMap, templateString) {

	function Content(params) { 
		var self = this;
		self.config = ko.observable();	
		self.load();
	}
	
	Content.prototype.load = function() {
		var self = this;
		$.get("https://emcloudadventurehop-eugene-murray.c9.io/api/config", function(data) {

            console.log(data);
            
            var viewModel = koMap.fromJS(data);
            console.log(viewModel);

            self.config(viewModel);

            console.log(self.config());
        });
		
	};

	return { template: templateString, viewModel: Content };
});