'use strict';

/* Controllers */

angular.module('restApp.controllers', ['restApp.services']).
  controller('MyCtrl1', ['$scope','apiConfig', function($scope, apiConfig) {
	

    $scope.apiConfig = apiConfig;

	// $scope.$watch('apiConfig', function(apiConfig) {
	//     if(angular.isDefined(apiConfig)) {
	// 	 $scope.apiKey = apiConfig.APIkey;
	// 	 $scope.apiHost = apiConfig.APIhost;
	// 	 $scope.apiConfigData = apiConfig;
	//     }
	// });
   $('.jQueryTest').html($scope.apiConfig);
	 console.log($scope.apiConfig);

  }])


  .controller('MyCtrl2', ['$scope','apiConfig', function($scope, apiConfig) {
    $scope.apiConfig = apiConfig;  		
  }]);