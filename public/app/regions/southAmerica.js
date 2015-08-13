define(['knockout', 'text!regions/south-america.html'], function(ko, templateString) {

	function SouthAmerica(params) { }

	return { template: templateString, viewModel: SouthAmerica };
});