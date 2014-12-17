angular.module('myApp')

.controller('WidgetChildController', function($scope,$controller){
    $.extend(this, $controller('WidgetController', {$scope: $scope}));
    console.log($scope.parentData);
})

.controller( 'FirstChildCtrl', function ($scope,$controller,Data){
    $.extend(this, $controller('FirstCtrl', {$scope: $scope}));
    console.log('first-log-point',$scope.user);
})

.directive("firstitem", function(){
	return{
		restrict: "E",
		template: "<div><span><b>This is a child extended data from the root Controller:</b></span><span>&nbsp;</span>{{user}}</div>",//print out the parent data
	}
})

.controller( 'SecondChildCtrl', function($scope,$controller,Data){
    $.extend(this, $controller('SecondCtrl', {$scope: $scope}));
    console.log('first-log-point',$scope.user2);
})

.directive("seconditem", function(){
	return{
		restrict: "E",
		template: "<div><span><b>This is a child extended data from the root Controller:</b></span><span>&nbsp;</span>{{user2}}</div>",//print out the parent data
	}
})

.controller( 'ThirdChildController', function($scope,$controller,Data){
	$.extend(this, $controller('ThirdCtrl', {$scope: $scope}));
        $scope.data = Data;
})
