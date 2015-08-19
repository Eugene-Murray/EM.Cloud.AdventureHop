define(['knockout', 'text!config.html', 'text!config.config'], function(ko, templateString, config) {

	function Config(params) { 
		var self = this;
	
		self.config = ko.observable();
		
		
		$.get("https://emcloudadventurehop-eugene-murray.c9.io/api/config", function(data) {

            console.log(data);

            self.config(JSON.stringify(data.items[0]));

            console.log(self.config());
        });
		
		
		self.onClick_UpdateConfig = function(){
			console.log("onClick_UpdateConfig");
			
			var newConfig = self.config();
		
  		
  			$.ajax({
  				method: "PUT",
  				url: "https://emcloudadventurehop-eugene-murray.c9.io/api/config",
  				data: newConfig,
  				contentType: "application/json; charset=utf-8"
			})
  			.done(function( msg ) {
    			alert( "Data Saved: " + msg );
  			});
		};
	}

	return { template: templateString, viewModel: Config };
});