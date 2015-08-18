define(['knockout', 'text!content.html'], function(ko, templateString) {

	function Content(params) { }

	return { template: templateString, viewModel: Content };
});