(function () {
  var servicio = angular.module('horario.services', []);

  servicio.factory('horarioService', ['$http', '$q', function ($http, $q) {
      //LLAMA EL FILTRO DE NORMALIZAR NOMBRES
      //VARIABLES DE WINDOW O EL NAVEGADOR
      function clases() {
        var deferred = $q.defer();
        $http.get('horario.json')
                .success(function (data) {
                  deferred.resolve(data);
                });
        return deferred.promise;
      }
      return{
        clases: clases
      };
    }]);
})();

