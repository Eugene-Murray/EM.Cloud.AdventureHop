define(['knockout', 'text!regions/polar-regions.html'], function(ko, templateString) {

	function PolarRegions(params) { }

	return { template: templateString, viewModel: PolarRegions };
});