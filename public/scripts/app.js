'use strict';

/**
 * @ngdoc overview
 * @name knobullwebappApp
 * @description
 * # knobullwebappApp
 *
 * Main module of the application.
 */
var knobullApp=angular.module('knobullApp', ['ngRoute','angularUtils.directives.dirPagination'])

  knobullApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/learn', {
        templateUrl: 'views/learn.html',
        controller: 'LearnCtrl',
        controllerAs: 'learn'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
     .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .when('/messageboard', {
        templateUrl: 'views/messageboard.html',
        controller: 'MessageboardCtrl',
        controllerAs: 'messageboard'
      })
  /*  })
    .when('/search', {
      templateUrl: 'views/search.html',
      controller: 'SearchController',
      controllerAs: 'search'
    })
    */
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/privacy', {
        templateUrl: 'views/privacy.html',
        controller: 'privacyCtrl',
        controllerAs: 'privacy'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  /*
  This directive allows us to pass a function in on an enter key to do what we want.
   */
  app.directive('ngEnter', function () {
      return function (scope, element, attrs) {
          element.bind("keydown keypress", function (event) {
              if(event.which === 13) {
                  scope.$apply(function (){
                      scope.$eval(attrs.ngEnter);
                  });

                  event.preventDefault();
              }
          });
      };
  });
