angular.module('questionare.directives', [])
  .directive('timer', function($timeout) {
    return  {
      restrict: 'E',
      templateUrl: 'timer.html',
      replace: true,
      link: function(scope, element, attrs) {
      var startTime = new Date();
      var timeoutId;

      function updateTime() {
        scope.timeTaken = new Date() - startTime;
      }

      function updateLater() {
        timeoutId = $timeout(function() {
          updateTime();
          updateLater();
        }, 1000);
      }

      element.bind('$destroy', function() {
        $timeout.cancel(timeoutId);
      });

      updateTime();
      updateLater();
    }
  };
});
