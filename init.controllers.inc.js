angular.module('myApp')

.controller('WidgetController', function($scope,Data){
    $scope.parentData = [];
    $scope.src = [{"item" : {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}}];
    $scope.parentData.push($scope.src);
    console.log(Data.metadata);
})

.controller( 'FirstCtrl', function ($scope,Data){
    $scope.src = [{"item":{firstName:"Adam", lastName:"Biro", age:18, eyeColor:"green"}}];
    $scope.data = Data;
    $scope.user = $scope.$parent.parentData;
    $scope.user.push($scope.src);
    Data.metadata =" Overwrited crucial data from child";
    console.log(Data.metadata); 
})

.controller( 'SecondCtrl', function($scope,Data){
    $scope.src = [{"item":{firstName:"Eva", lastName:"Strack", age:90, eyeColor:"grey"}}];
    $scope.data = Data;
    $scope.user2 = $scope.$parent.parentData;
    console.log(Data.metadata);
})


.controller( 'ThirdController', function($scope,Data){
    $scope.data = Data;
});
