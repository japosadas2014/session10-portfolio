var portfolioApp = angular.module("portfolioApp",["ngRoute"])

var PortfolioListController = angular.module("PortfolioListController",[]);

portfolioApp.config(["$routeProvider", function($routeProvider) {

	$routeProvider
	.when("/", {
		templateUrl: "partials/portfolios.html",
		controller: "PortfolioListController"
	})
	//when("/login", {
	//	templateUrl: "partials/login.html",
	//	controller: "registration"
	//}).
	//when("/register", {
	//	templateUrl: "partials/register.html",
	//	controller: "registration"
	//}).
	.otherwise({
		redirectTo: "/404"
	});

}])
