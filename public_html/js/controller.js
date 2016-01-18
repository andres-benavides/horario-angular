(function () {
  var horaCntrl = angular.module('horario.controller', []);

  horaCntrl.controller('horarioController', ['$scope', 'horarioService', function ($scope, horarioService) {
      var fecha = new Date();
      var diaSemana = fecha.getDay();
      var diaArray = diaSemana - 1;
      horarioService.clases().then(function (data) {
        $scope.clases = data[diaArray];
      });
      $scope.$on('seleccionDia', function (event, args) {
        var diaSelecc = args.dia;
        horarioService.clases().then(function (data) {
          $scope.clases = data[diaSelecc];
        });
      });

    }]);
  horaCntrl.controller('menuController', ['$scope', function ($scope) {
      $scope.sleccionDia = function (dia) {
        $scope.$broadcast('seleccionDia', {dia: dia});
      };
    }]);
})();


