var app = angular.module("myApp",["ionic","myCtrl","myService"]);
app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
	$stateProvider.state("main",{
		templateUrl:"view/main.html",
			abstract:true
	}).state("main.movies_in",{
		url:"/movies_in",
		views:{
			"movies_in":{
				templateUrl:"view/movies_in.html",
				controller:"movies_in"
			}
		}
	}).state("main.movies_coming",{
		url:"/movies_coming",
		views:{
			"movies_coming":{
				templateUrl:"view/movies_coming.html",
				controller:"movies_coming"
			}
		}
	}).state("main.top",{
		url:"/top250",
		views:{
			"top250":{
				templateUrl:"view/top250.html",
				controller:"top250"
			}
		}
	}).state("detail",{
		url:"/detail/:id&:title",
		templateUrl:"view/detail.html",
		controller:"detail"
	})
	$urlRouterProvider.otherwise("/movies_in");
}])
















