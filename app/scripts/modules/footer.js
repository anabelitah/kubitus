/**
 * Created by anabelacarvalho on 15/11/16.
 */
angular
  .module('kub.footer', [])
  .directive('footer', function() {
    'use strict';
    return {
      templateUrl: 'views/footer.html'
    };
  });
