/**
 * Created by anabelacarvalho on 15/11/16.
 */
angular
  .module('kub.mainGallery', [])
  .directive('mainGallery', function() {
    'use strict';
    return {
      templateUrl: 'views/main-gallery.html'
    };
  })
  .controller('MainGalleryCtrl', ['$scope', 'GalleryConst', function($scope, galleryConst) {
    'use strict';

    $scope.mainGallery = galleryConst;

  }]);
