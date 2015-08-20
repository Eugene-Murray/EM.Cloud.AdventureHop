require.config({
	paths: {
		'text': '../assets/js/require-text-2.0.12',
		'knockout': './../lib/knockout/dist/knockout',
		'knockout-mapping': './../lib/knockout-mapping-js/knockout.mapping'//,
		//'article': './core/article'
	}
});

define(['knockout'], function(ko) {
	
	ko.components.register('site-header', { require: 'shared/header' });
	ko.components.register('site-slide-out-panels', { require: 'shared/slideOutPanels' });
	ko.components.register('site-footer', { require: 'shared/footer' });
	ko.components.register('site-search', { require: 'shared/search' });
	ko.components.register('site-contact', { require: 'shared/contact' });
	ko.components.register('site-signup', { require: 'shared/signup' });
	ko.components.register('site-login', { require: 'shared/login' });
	ko.components.register('site-forgot-password', { require: 'shared/forgotPassword' });


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
			  { route: ['/', '#/'], 							component: 'home', 	module: 'home/home'} 
			//, { route: ['#/contacts/new', '#/contacts/:id'], 	component: 'contact-edit', 	module: 'contacts/edit' } 
			, { route: '#/africa', 								component: 'africa', module: 'regions/africa' }
			, { route: '#/asia', 							    component: 'asia', module: 'regions/asia' }
			, { route: '#/central-america', 					component: 'central-america', module: 'regions/centralAmerica' }
			, { route: '#/europe', 								component: 'europe', module: 'regions/europe' }
			, { route: '#/gallery', 							component: 'gallery', module: 'regions/gallery' }
			, { route: '#/north-africa-middle-east', 			component: 'north-africa-middle-east', module: 'regions/northAfricaMiddleEast' }
			, { route: '#/north-america', 						component: 'north-america', module: 'regions/northAmerica' }
			, { route: '#/oceania', 					 	    component: 'oceania', module: 'regions/oceania' }
			, { route: '#/polar-regions', 					 	component: 'polar-regions', module: 'regions/polarRegions' }
			, { route: '#/south-america', 					 	component: 'south-america', module: 'regions/southAmerica' }
			//, { route: '#/admin', 					 			component: 'admin', module: 'admin/page' }
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