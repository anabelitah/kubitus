/**
 * Created by anabelacarvalho on 15/11/16.
 */
angular
  .module('kub.newsletter', [])
  .directive('newsletter', function() {
    'use strict';
    return {
      templateUrl: 'views/newsletter.html'
    };
  });
