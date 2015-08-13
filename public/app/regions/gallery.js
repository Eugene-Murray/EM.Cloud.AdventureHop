define(['knockout', 'text!regions/gallery.html'], function(ko, templateString) {

	function Gallery(params) { }

	return { template: templateString, viewModel: Gallery };
});