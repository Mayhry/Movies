var mySer = angular.module("myService",[]);
mySer.service("$load",["$http",function($http){
		this.getData = function(url,params,callback){
			$http.get(url,{
				params:params
			}).success(function(data){
				if(data){
					callback(data);
				}
			})
		}
	}])