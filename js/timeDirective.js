angular.module('timeApp')
.directive('showTime' , function () {
  return {
    restrict: 'E'
    ,templateUrl: '../time.html'
    , link: function(scope, element, attrs){
      var currentTime = new Date();
      scope.time = currentTime.toString();
    }
  }
});
