define(['knockout', 'text!shared/slide-out-panels.html'], function(ko, templateString) {

	function SlideOutPanels(params) { 
	    
	    console.log("SlideOutPanels::init");
	    
	    $('#nav').click(function(e) {
            console.log("#nav::click");
            $('.slide-panel').removeClass('open'); 
            $('.menu-toggle').removeClass('active-slide-btn'); 
        });
		
// 		$('.slide-panel .close').click(function(e) {
//                 $('.active-slide-btn').removeClass('active-slide-btn');
//                 $(this).parent().removeClass('open');
//                 $('html').removeClass('slide-active');
//                 $('#page').removeClass('page-off');
//                 e.preventDefault();
//             });
            
//          	// indicate what panel you're on when you've clicked inside a panel to another panel
//             $('.slide-panel .signin-toggle').click(function(e) {
//                 $('.header-btn.signin-toggle').toggleClass('active-slide-btn');
//                 e.preventDefault();
//             });

//             $('.slide-panel .login-toggle').click(function(e) {
//                 $('.header-btn.login-toggle').toggleClass('active-slide-btn');
//                 e.preventDefault();
//             });  
            
//     $('[data-slide="slide"]').click(function(e) {
            
//         var $this = $(this);
//         var target = $this.attr('data-target');
//         var $target = $(target);
//         if ($('.slide-panel-parent').children().is('.open')) {
            
//             console.log("gggggg");
            
//             $('.open').not(target).removeClass('open');
//             $('.active-slide-btn').not(this).removeClass('active-slide-btn');
//             $(this).toggleClass('active-slide-btn');
//             $(target).toggleClass('open');
//             $('html').removeClass('slide-active');
//         } else {
            
//             console.log("ffffffff");
            
//             $(target).toggleClass('open');
//             $(this).toggleClass('active-slide-btn');
//             $('#page').toggleClass('page-off');
//         }
        
//         e.preventDefault();
//     });
    
 	}

	return { template: templateString, viewModel: SlideOutPanels };
});