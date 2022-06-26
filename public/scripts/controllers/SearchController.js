'use strict';

/**
 * @ngdoc function
 * @name knobullwebappApp.controller:LearningcenterCtrl
 * @description
 * # Learningce  nterCtrl
 * Controller of the knobullwebappApp
 */
//alert("serach controller");
angular.module('knobullApp')
  .controller('SearchController', function($scope,$http) {
   $scope.data={};
   $scope.data1={};
   $scope.data2={};
   $scope.custom = true;
   $scope.show=true;
   $scope.hide=true;
   //$scope.data3={};
   $scope.searching=function(search){
      //$window.location.assign('#/search');
      //e.preventDefault();
      $scope.show=false;
      $scope.hide=false;
      var search=search;
      //alert("clicked");
      //alert(search);

      var subscriptionKey = '364e120b1c764207af6ac6fe55ca9f7f';
      var customConfigId = 'ac8ce441-aed2-47dd-81ca-2436a20bee80';
      var region = 'en-US';
      var count = 20;

      var request = {
         url: 'https://api.cognitive.microsoft.com/bingcustomsearch/v7.0/search?' + 
             'q=' + search + "&" +
             'customconfig=' + customConfigId + "&" +
             "mkt=" + region + "&" +
             'count=' + count,
         headers: {
             'Ocp-Apim-Subscription-Key' : subscriptionKey
         }
      }

      $http(request).then(function(body) {
         var data = body.data;
         $scope.data2.results = data.webPages.value;
      });

      console.log($scope);
   };
});
