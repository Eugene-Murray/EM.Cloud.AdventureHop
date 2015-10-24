define(['knockout', 'text!regions/africa.html'], function(ko, templateString) {

    function Africa(params) {
        
        //var items = load();
        self.articles = ko.observableArray([]);

        $.get("/api/articles/region/north_america", function(data) {

            self.articles(data.items);

            console.log(self.articles());
            
            var x = $('.slide-panel');
            
            console.log("fffffffffffffffff");
            console.log(x);
            
            
            
            // setTimeout(function(){ 
                
            //     $('.slide-panel').removeClass('open'); 
            //     //$('.menu-toggle').removeClass('active-slide-btn');
                
                
            // }, 6000);
            
        });

        
        $('.active-slide-btn').removeClass('active-slide-btn');
        $('#navigation-panel').removeClass('open');
        $('html').removeClass('slide-active');
        $('#page').removeClass('page-off');
        
    }

    var load = function() {

    }

    return {
        template: templateString,
        viewModel: Africa
    };
});