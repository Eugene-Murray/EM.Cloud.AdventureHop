define(['knockout', 'text!home/home.html'], function(ko, templateString) {

    function Home(params) {
        var self = this;
        
        setupDom();
        
        var items = load();
        self.articles = ko.observableArray(items);
        
        
        $.get("https://emcloudadventurehop-eugene-murray.c9.io/api/articles", function(data) {

            console.log(data);

            
        });
        
    }

    var load = function(){
        
        var siteSection = { HOME : 'HOME',
                            REGION : 'REGION', 
        					GALLERY : 'Gallery',
        					CONTACT : 'CONTACT',
        					LOGIN : 'LOGIN'
        				  };
        
        var articleTypes = { IMAGE : 'IMAGE',
                             IMAGE_SLIDER : 'IMAGE_SLIDER',
                             AD : 'AD',
                             YOUTUBE_VIDEO : 'YOUTUBE_VIDEO',
                             VIMEO_VIDEO : 'VIMEO_VIDEO'                
        };
                             
        var regions = { north_america : 'North America',
                        central_america : 'Central America',
                        south_america : 'South America',
                        europe : 'Europe',
                        north_africa_middle_east : 'North Africa & Middle-East',
                        africa : 'Africa',
                        asia : 'Asia',
                        oceania : 'Oceania',
                        polar_regions : 'Polar Regions',
                        gallery : 'Gallery' }
        
        
        return [{ articleId : '#article-1',
                  siteSection : siteSection.HOME,
                  articleType : articleTypes.IMAGE,
                  region : regions.europe,
                  regionUrl : "#/europe", // TODO: "/#europe/full_article"
                  title : "Mountain Biking in Tenerife",
                  description : "Tenerife is an excellent MBing location",
                  imageUrl : "https://farm8.staticflickr.com/7604/17086946075_c4e7a8d7b2_k.jpg",
                  videoUrl : "",
                  htmlContent : "" },
                { articleId : 'article-2',
                  siteSection : siteSection.HOME,
                  articleType : articleTypes.IMAGE_SLIDER,
                  region : regions.north_america,
                  regionUrl : "#/north-america", 
                  nameofAuthor : "Eugene Murray",
                  date : "February 28, 2015",
                  title : "USA - NATIONAL PARKS & BRIGHT LIGHTS",
                  description : "From the Golden Gate Bridge to glowing canyon walls at sunset, this trip captures the beauty of the cities and wilderness of the Western US. It’s perfect for the traveller looking to breathe in the scent of the sequoias of Yosemite by day but wanting the comforts of a hotel at night. Prepare yourself for otherworldly ‘hoodoos’ in Bryce Canyon National Park and the desert scenery in Death Valley—the lowest spot on the continent—before taking an optional helicopter ride above the incomparable Grand Canyon. You won’t just visit the West Coast—you’ll live it.",
                  carouselImages : [{ index : 0, active : 'active', imageUrl : 'https://farm9.staticflickr.com/8646/16175970590_e836b435b7.jpg', title : 'Tenerife' }, 
                                    { index : 1, active : '', imageUrl : 'https://farm9.staticflickr.com/8676/16177265869_0497a4c7cc.jpg', title : 'Tenerife' }, 
                                    { index : 2, active : '', imageUrl : 'https://farm9.staticflickr.com/8646/16175970590_e836b435b7.jpg', title : 'Tenerife' }],
                  imageUrl : "",
                  videoUrl : "",
                  htmlContent : "",
                  comments : [{ nameofAuthor : '', comment : '' }, 
                              { nameofAuthor : '', comment : '' }, 
                              { nameofAuthor : '', comment : '' }]
                },
                { articleId : 'article-3',
                  siteSection : siteSection.HOME,
                  articleType : articleTypes.YOUTUBE_VIDEO,
                  region : regions.north_america,
                  regionUrl : "#/north-america", 
                  title : "REDBULL Vid",
                  description : "Goo...",
                  videoUrl : "https://www.youtube.com/embed/Cj6ho1-G6tw",
                  }];
        
    }

    var setupDom = function() {

        // READ UP IF YOU USE IT: http://isotope.metafizzy.co/layout-modes/packery.html
        // https://github.com/metafizzy/isotope-packery

        // --------- Initialize Isotope 2  with Fonts Loaded and Images Loaded


        var $container = $('.filter-masonry,.testimonial-page,.about-page,.simple-gallery').css('opacity', '0');

        WebFontConfig = {
            google: {
                families: ['Montserrat', 'Roboto']
            },
            active: function() {
                $container.imagesLoaded(function() {
                    $container.css('opacity', '1').isotope({
                        itemSelector: '.post',
                        layoutMode: 'masonry',
                        masonry: {
                            columnWidth: '.grid-sizer',
                            gutter: '.gutter-sizer'
                        },
                        resizesContainer: true
                    });
                });
            }
        };


        (function() {
            var wf = document.createElement('script');
            //wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
            //'://ajax.googleapis.com/ajax/libs/webfont/1.4.2/webfont.js';
            wf.src = 'assets/js/webfont.js'; //local is faster this is not a cloud service or if it is, it's fucking slow
            wf.type = 'text/javascript';
            wf.async = 'true';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wf, s);
        })();


        // SORT ON BLOG and PORTFOLIO
        $('.sort li a').on('click', function() {
            $('.sort li a').parent('li').removeClass('active');
            $(this).parent('li').addClass('active');
            var filterValue = $(this).attr('data-filter');
            $container.isotope({
                filter: filterValue
            });
            return false;

        });


        $(document).ready(function() {

            $container.imagesLoaded(function() {
                $container.css('opacity', '1').isotope('layout');
            });

            $(window).on('resize load', function() {
                $container.imagesLoaded(function() {
                    $container.css('opacity', '1').isotope('layout');
                });
            });

        });


        /*! ===== Filter Clone ====== */
        $(document).ready(function() {

            $(".sort").clone(true).appendTo('.filter-clone');
            $(".filter-title").click(function() {
                $(".filter-clone .sort").slideToggle();
                $(this).toggleClass("open")
            });
            $(".filter-clone .sort a").click(function(a) {
                $(".filter-title").text($(this).text());
                $(".filter-title").addClass("active");
                $(".filter-clone .sort").hide();
                $(this).addClass("active");
                $(".filter-title").removeClass("open");
                a.preventDefault()

                var panel = $('.filter-masonry');
                $('html, body').animate({
                    scrollTop: panel.offset().top + (-60)
                }, 500);
            });
        });

    }

    return {
        template: templateString,
        viewModel: Home
    };
});