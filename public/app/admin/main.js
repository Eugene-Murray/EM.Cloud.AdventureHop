require.config({
	paths: {
		'text': '../../assets/js/require-text-2.0.12',
		'knockout': './../../lib/knockout/dist/knockout',
		'knockout-mapping': './../../lib/knockout-mapping-js/knockout.mapping',
		'Article': './../core/article'
	}
});

define(['knockout'], function(ko) {
	
	var pageVm = {
		name: ko.observable(),
		data: ko.observable(),
		setRoute: function(name, data) {
			//Set data first, otherwise component will get old data
			this.data(data);
			this.name(name);
		}
	};

	var sammyConfig = Sammy('#appHost', function() {
		var self = this;
		var pages = [
			  { route: ['admin.html#/', 'admin.html#/'], 							component: 'content', 	module: 'content'} 
			, { route: '#/config', 												component: 'config', module: 'config' }
		];

		pages.forEach(function(page) {
			//Register the component, only needs to hapen
			ko.components.register(page.component, { require: page.module });

			//Force routes to be an array
			if (!(page.route instanceof Array))
				page.route = [page.route];

			//Register routes with Sammy
			page.route.forEach(function(route) {
				self.get(route, function() {

					//Collect the parameters, if present
					var params = {};
					ko.utils.objectForEach(this.params, function(name, value) {
						params[name] = value;
					});

					//Set the page
					pageVm.setRoute(page.component, params);
				});
			});
		});
	});
	

	$(document).ready(function() {
		sammyConfig.run('#/');
		ko.applyBindings(pageVm);
	});
	
	
});