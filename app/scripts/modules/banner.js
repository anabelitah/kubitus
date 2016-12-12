/**
 * Created by anabelacarvalho on 15/11/16.
 */
angular
  .module('kub.banner', [])
  .directive('banner', function() {
    'use strict';
    return {
      templateUrl: 'views/banner.html',
      scope: {
        view: '=view',
        subview: '=subview'
      }
    };
  });
