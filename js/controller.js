
var myCtrl = angular.module("myCtrl",[]);

myCtrl.controller("movies_in",["$scope","$load","$ionicLoading",function($scope,$load,$ionicLoading){
	
	$scope.subjects = [];
	if(localStorage.getItem("now")){
		$scope.subjects = JSON.parse(localStorage.getItem("now"));
	}else{
		$ionicLoading.show({
            template: '<ion-spinner icon="android"></ion-spinner>'
        });
		$load.getData("php/movies_in.php",{"city":"深圳"},function(data){
			$scope.subjects = data;
			
			localStorage.setItem("now",JSON.stringify(data));
			$ionicLoading.hide();
		})
	}
	
}])

myCtrl.controller("movies_coming",["$scope","$load","$ionicLoading",function($scope,$load,$ionicLoading){
	
	if(localStorage.getItem("coming")){
		$scope.subjects = JSON.parse(localStorage.getItem("coming"));
	}else{
		$ionicLoading.show({
            template: '<ion-spinner icon="android"></ion-spinner>'
        });
		$load.getData("php/getComing.php",{"city":"深圳"},function(data){
			$scope.subjects = data;
			localStorage.setItem("coming",JSON.stringify(data));
			$ionicLoading.hide();
		})
	}
	
	
	
}])

myCtrl.controller("top250",["$scope","$load","$ionicLoading",function($scope,$load,$ionicLoading){
	
	if(localStorage.getItem("top250")){
		$scope.subjects = JSON.parse(localStorage.getItem("top250"));
	}else{
		$ionicLoading.show({
            template: '<ion-spinner icon="android"></ion-spinner>'
        });
		$load.getData("php/top250.php",{"city":"深圳"},function(data){
			$scope.subjects = data;
			localStorage.setItem("top250",JSON.stringify(data));
			$ionicLoading.hide();
		})
	}

}])
myCtrl.controller("detail",["$scope","$stateParams","$load","$ionicLoading",
	function($scope,$stateParams,$load,$ionicLoading){
		
	$ionicLoading.show({
        template: '<ion-spinner icon="android"></ion-spinner>'
    });
	$load.getData("php/getDetail.php",{"id":$stateParams.id},function(data){
		if(data != undefined){
			$scope.detailData = data;
			$ionicLoading.hide();
		}
	})
}]);












