/**
 * Created by anabelacarvalho on 15/11/16.
 */
angular
  .module('kub.bannerSlideshow', ['slickCarousel'])
  .directive('bannerSlideshow', function() {
    'use strict';
    return {
      templateUrl: 'views/banner-slideshow.html'
    };
  })
  .controller('SliderSlickCtrl', ['$scope', function($scope) {
    'use strict';

    //====================================
    // Slick 1
    //====================================
    $scope.slides = [
      {
        id: 'banner1',
        class: 'banner-slide-1',
        label: 'label'
      },
      {
        id: 'banner2',
        class: 'banner-slide-2',
        label: 'label'
      },
      {
        id: 'banner3',
        class: 'banner-slide-3',
        label: 'label'
      }
    ];
    $scope.slickConfigLoaded = true;
    $scope.slickCurrentIndex = 0;
    $scope.slickConfig = {
      dots: true,
      autoplay: true,
      initialSlide: 0,
      infinite: true,
      autoplaySpeed: 2000,
      method: {},
      event: {
        beforeChange: function () {
          //event, slick, currentSlide, nextSlide
          //console.log('before change', Math.floor((Math.random() * 10) + 100));
        },
        afterChange: function (event, slick, currentSlide) {
          $scope.slickCurrentIndex = currentSlide;
        }
        //breakpoint: function (event, slick, breakpoint) {
        //  console.log('breakpoint');
        //},
        //destroy: function (event, slick) {
        //  console.log('destroy');
        //},
        //edge: function (event, slick, direction) {
        //  console.log('edge');
        //},
        //reInit: function (event, slick) {
        //  console.log('re-init');
        //},
        //init: function (event, slick) {
        //  console.log('init');
        //},
        //setPosition: function (evnet, slick) {
        //  console.log('setPosition');
        //},
        //swipe: function (event, slick, direction) {
        //  console.log('swipe');
        //}
      }
    };
  }]);
