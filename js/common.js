function scrollBanner() {
  $(document).scroll(function(){
  	var scrollPos = $(this).scrollTop();
  	$('#banner-1').css({
  	  'top' : (scrollPos/1.3)+100+'px',
  	  'opacity' : 1-(scrollPos/360)
  	});
  	$('#banner-2').css({
  	  'top' : (scrollPos/1.5)+120+'px',
  	  'opacity' : 1-(scrollPos/360)
  	});
  	
  });    
}
scrollBanner();

var room = angular.module("room", ["ngRoute"]);

room.config(function($routeProvider) {
  $routeProvider.when ("/", {
    templateUrl: "views/main.html"
  });
  $routeProvider.when ("/about", {
    templateUrl: "views/about.html"
  });
  $routeProvider.when ("/gallery", {
    templateUrl: "views/gallery.html"
  });
  $routeProvider.when ("/contacts", {
    templateUrl: "views/contacts.html"
  });
  $routeProvider.otherwise ({redirectTo: "/"});
});


