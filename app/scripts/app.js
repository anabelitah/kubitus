'use strict';

/**
 * @ngdoc overview
 * @name kubitusApp
 * @description
 * # kubitusApp
 *
 * Main module of the application.
 */
angular
  .module('kubitusApp', [
    'ngRoute',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngAnimate',
    'pascalprecht.translate',
    'slickCarousel',
    'wu.masonry',
    'kub.mainMenu',
    'kub.topHeader',
    'kub.bannerSlideshow',
    'kub.banner',
    'kub.mainGallery',
    'kub.pageGallery',
    'kub.productGallery',
    'kub.newsletter',
    'kub.pageNotFounded',
    'kub.footer'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })

      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl',
        controllerAs: 'gallery'
      })
      .when('/gallery/:product_type', {
        templateUrl: 'views/gallery_page.html',
        controller: 'GalleryPageCtrl',
        controllerAs: 'galleryPage'
      })
      .when('/gallery/:product_type/:product_id', {
        templateUrl: 'views/gallery_product.html',
        controller: 'GalleryProductCtrl',
        controllerAs: 'galleryProduct'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function ($translateProvider) {
      $translateProvider.useStaticFilesLoader({
        prefix: 'translations/',
        suffix: '.json'
      });
      $translateProvider.preferredLanguage('en');
  })
  .config(['slickCarouselConfig', function (slickCarouselConfig) {
    slickCarouselConfig.dots = true;
    slickCarouselConfig.autoplay = false;
  }]);

