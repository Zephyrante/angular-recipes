'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
 angular
 .module('yapp', [
    'ui.router',
    'snap',
    'ngAnimate'
    ])
 .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/inicio');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
    .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
    })
    .state('login', {
      url: '/login',
      parent: 'base',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
  })
    .state('dashboard', {
      url: '/dashboard',
      parent: 'base',
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardCtrl'
  })
    .state('inicio', {
        url: '/inicio',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/inicio.html'
    })
    .state('ingredientes', {
        url: '/ingredientes',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/ingredientes.html'
    });

});
