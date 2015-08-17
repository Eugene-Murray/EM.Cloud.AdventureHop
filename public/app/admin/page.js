define(['knockout', 'text!admin/index.html'], function(ko, templateString) {

	function SettingsViewmodel(params) { }

	return { template: templateString, viewModel: SettingsViewmodel };
});