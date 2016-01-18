(function () {
  var horaDirect = angular.module('horario.directives', []);
  //CREAR UNA DIRECTIVA
  horaDirect.directive('unDia', function () {
    return {
      restrict: 'E',
      templateUrl: 'partials/un-dia.html'
    };
  });
})();


