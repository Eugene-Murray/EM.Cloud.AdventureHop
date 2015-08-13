define(['knockout', 'text!shared/forgot-password.html'], function(ko, templateString) {

	function ForgotPassword(params) { 
		
		$('.slide-panel .close').click(function(e) {
                $('.active-slide-btn').removeClass('active-slide-btn');
                $(this).parent().removeClass('open');
                $('html').removeClass('slide-active');
                $('#page').removeClass('page-off');
                e.preventDefault();
            });
            
         	// indicate what panel you're on when you've clicked inside a panel to another panel
            $('.slide-panel .signin-toggle').click(function(e) {
                $('.header-btn.signin-toggle').toggleClass('active-slide-btn');
                e.preventDefault();
            });

            $('.slide-panel .login-toggle').click(function(e) {
                $('.header-btn.login-toggle').toggleClass('active-slide-btn');
                e.preventDefault();
            });    
		
	}

	return { template: templateString, viewModel: ForgotPassword };
});