define(['knockout', 'text!regions/north-america.html'], function(ko, templateString) {

	function NorthAmerica(params) { }

	return { template: templateString, viewModel: NorthAmerica };
});