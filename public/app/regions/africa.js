define(['knockout', 'moment', 'text!regions/africa.html'], function(ko, moment, templateString) {

	function Africa(params) { 
		var items = load();
        self.articles = ko.observableArray(items);
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
                        polar_regions : 'Polar Regions'
                      }
        
        
        return [{ articleId : 'article-1',
        		  siteSection : siteSection.REGION,	
                  articleType : articleTypes.IMAGE,
                  region : regions.north_america,
                  regionUrl : "#/north-america", 
                  nameofAuthor : "Eugene Murray",
                  date : moment('12/08/2015', 'MMMM Do YYYY'),
                  day : '12',
                  month : 'Aug',
                  title : "USA - NATIONAL PARKS & BRIGHT LIGHTS",
                  description : "From the Golden Gate Bridge to glowing canyon walls at sunset, this trip captures the beauty of the cities and wilderness of the Western US. It’s perfect for the traveller looking to breathe in the scent of the sequoias of Yosemite by day but wanting the comforts of a hotel at night. Prepare yourself for otherworldly ‘hoodoos’ in Bryce Canyon National Park and the desert scenery in Death Valley—the lowest spot on the continent—before taking an optional helicopter ride above the incomparable Grand Canyon. You won’t just visit the West Coast—you’ll live it.",
                  carouselImages : [],
                  imageUrl : "https://farm9.staticflickr.com/8646/16175970590_e836b435b7.jpg",
                  videoUrl : "",
                  htmlContent : "",
                  comments : [{ nameofAuthor : '@Tom', comment : 'Cool!' }, 
                              { nameofAuthor : '@Fiona', comment : 'Amaazing Pic' }, 
                              { nameofAuthor : '@Cathy', comment : 'Very Cool!' }],
                  tags : [{ tag : 'Road Trip' }, 
                              { tag : 'Eco' }, 
                              { tag : 'Photography' }]
                	},
                	{ articleId : 'article-2',
        		  siteSection : siteSection.REGION,	
                  articleType : articleTypes.IMAGE,
                  region : regions.north_america,
                  regionUrl : "#/north-america", 
                  nameofAuthor : "Eugene Murray",
                  date : moment('12/08/2015', 'MMMM Do YYYY'),
                  day : '12',
                  month : 'Aug',
                  title : "USA - NATIONAL PARKS & BRIGHT LIGHTS XX",
                  description : "From the Golden Gate Bridge to glowing canyon walls at sunset, this trip captures the beauty of the cities and wilderness of the Western US. It’s perfect for the traveller looking to breathe in the scent of the sequoias of Yosemite by day but wanting the comforts of a hotel at night. Prepare yourself for otherworldly ‘hoodoos’ in Bryce Canyon National Park and the desert scenery in Death Valley—the lowest spot on the continent—before taking an optional helicopter ride above the incomparable Grand Canyon. You won’t just visit the West Coast—you’ll live it.",
                  carouselImages : [],
                  imageUrl : "https://farm9.staticflickr.com/8646/16175970590_e836b435b7.jpg",
                  videoUrl : "",
                  htmlContent : "",
                  comments : [{ nameofAuthor : '@Tom', comment : 'Cool!' }, 
                              { nameofAuthor : '@Fiona', comment : 'Amaazing Pic' }, 
                              { nameofAuthor : '@Cathy', comment : 'Very Cool!' }],
                  tags : [{ tag : 'Road Trip' }, 
                              { tag : 'Eco' }, 
                              { tag : 'Photography' }]
                	}
                
                ];
        
    }

	return { template: templateString, viewModel: Africa };
});