define(['knockout', 'text!shared/footer.html'], function(ko, templateString) {

	function Footer(params) { }

	return { template: templateString, viewModel: Footer };
});