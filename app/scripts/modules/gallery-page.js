/**
 * Created by anabelacarvalho on 15/11/16.
 */
angular
  .module('kub.pageGallery', [])
  .directive('pageGallery', function() {
    'use strict';
    return {
      templateUrl: 'views/page-gallery.html'
    };
  })
  .controller('PageGalleryCtrl', ['$scope', '$routeParams', '$timeout', 'GalleryConst', function($scope, $routeParams, $timeout, galleryConst) {
    'use strict';

    $scope.$watch('selectedItem', function() {
      $timeout(function() {
        $("[masonry]").masonry('reloadItems');
        $("[masonry]").masonry();
      }, 700);
    });
    $scope.galleryPage = galleryConst[$routeParams['product_type']];
    $scope.galleryPageFounded = !!$scope.galleryPage;
    $scope.selectedItem = 'all-products';
    $scope.allGalleryItems = $.map($scope.galleryPage.category, function(value, categoryType) {
      return $.map(value.items, function(value, index) {
        return angular.extend({}, value, {type: categoryType});
      });
    });
    $scope.selectedItems =
    $scope.events = {
      selectItem: function (id) {
        $scope.selectedItem = id;
      }
    }

  }]);
