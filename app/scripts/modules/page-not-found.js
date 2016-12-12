/**
 * Created by anabelacarvalho on 15/11/16.
 */
angular
  .module('kub.pageNotFounded', [])
  .directive('pageNotFounded', function() {
    'use strict';
    return {
      templateUrl: 'views/page-not-founded.html'
    };
  })
  .controller('PageNotFoundedCtrl', ['$scope', function($scope) {
    'use strict';

  }]);
