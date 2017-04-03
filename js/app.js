(function(){
    var app = angular.module('dmci', ['dmci-template']);

    app.controller('PropLocController', ['$scope', '$http', function($scope, $http){

        $http.get('data/cityLoc.json').success(function(data){
            $scope.cityLoc = data;
        });

    }]);

    app.controller('BuyersGuideController', ['$scope', '$http', function($scope, $http){

        $http.get('data/procedure.json').success(function(data){
            $scope.procedure = data;
        });

        $http.get('data/cashRequirement.json').success(function(data){
            $scope.cashRequirement = data;
        });

        $http.get('data/bankFinancing.json').success(function(data){
            $scope.bankFinancing = data;
        });

    }]);

    app.controller('AboutController', ['$scope', '$http', function($scope, $http){

        $http.get('data/features.json').success(function(data){
            $scope.features = data;
        });

    }]);

})();
