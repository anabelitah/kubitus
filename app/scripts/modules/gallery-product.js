/**
 * Created by anabelacarvalho on 15/11/16.
 */
angular
  .module('kub.productGallery', [])
  .directive('productGallery', function() {
    'use strict';
    return {
      templateUrl: 'views/product-gallery.html'
    };
  })
  .controller('ProductGalleryCtrl', ['$scope', function($scope) {
    'use strict';


  }]);
