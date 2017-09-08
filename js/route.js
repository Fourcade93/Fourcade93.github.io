var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
	$routeProvider.when ("/", {
		templateUrl: "views/main.html",
		controller: "mainCtrl"
	});
	$routeProvider.when ("/about", {
		templateUrl: "views/about.html",
		controller: "aboutCtrl"
	});
	$routeProvider.when ("/gallery", {
		templateUrl: "views/gallery.html",
		controller: "galleryCtrl"
	});
	$routeProvider.when ("/team", {
		templateUrl: "views/team.html",
		controller: "teamCtrl"
	});
	$routeProvider.when ("/contacts", {
		templateUrl: "views/contacts.html",
		controller: "contactsCtrl"
	});
	$routeProvider.otherwise ({redirectTo: "/"});

});