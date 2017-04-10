var myApp = angular.module('myApp', []);
myApp.controller('mainCtrl',['$scope', '$http', function($scope, $http){
  $scope.submit = function(){
    var postcode = $scope.postcode;
    $http.get('/api/restaurants', {params:{code : postcode}})
       .then(function(restaurant) {
           $scope.restaurants = restaurant.data;
       })
       .catch(function(restaurant) {
           console.log('Error: ' + restaurant);
       });
  }
}]);
