angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope']
function LunchCheckController($scope){
  $scope.checkTooMuch = function() {
    $scope.lunchMsg = "Please enter data first"
    var numberElements = $scope.lunchList.split(",").length;
    if($scope.lunchList && numberElements > 0){
      if(numberElements > 3){
        $scope.lunchMsg = "Too much!"
      }else{
        $scope.lunchMsg = "Enjoy!"
      }
    }
  };

};
