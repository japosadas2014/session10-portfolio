var portfolioApp = angular.module("portfolioApp",["ngRoute"])

var PortfolioListController = angular.module("PortfolioListController",[]);

portfolioApp.config(["$routeProvider", function($routeProvider) {

	$routeProvider
	.when("/portfolio/:portfolio_name", {
		templateUrl: "partials/portfolio_view.html",
		controller: "PortfolioViewController"
	})
	.when("/", {
		templateUrl: "partials/portfolios.html",
		controller: "PortfolioListController"
	})

	//when("/register", {
	//	templateUrl: "partials/register.html",
	//	controller: "registration"
	//}).
	.otherwise({
		redirectTo: "/404"
	});

}])
