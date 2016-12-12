/**
 * Created by anabelacarvalho on 15/11/16.
 */
angular
  .module('kub.topHeader', ['angularModalService', 'ngCookies'])
  .directive('topHeader', function() {
    'use strict';
    return {
      templateUrl: 'views/top-header.html'
    };
  })
  .controller('LanguageCtrl', ['$scope', '$cookies', '$translate', 'ModalService',
    function($scope, $cookies, $translate, ModalService) {
    'use strict';

    $scope.isLanguageSelected = function (language) {
      return language === $cookies.get('language');
    };

    $scope.changeLanguage = function (language) {
      $cookies.put('language', language);
      $translate.use(language);
    };

    $scope.myLanguage = function() {

      if (!$cookies.get('language')) {
        ModalService.showModal({
          templateUrl: 'views/language.html',
          controller: 'LanguagePopUpController'
        }).then(function(modal) {
          // The modal object has the element built, if this is a bootstrap modal
          // you can call 'modal' to show it, if it's a custom modal just show or hide
          // it as you need to.
          modal.element.modal();
          modal.close.then(function(result) {
            $cookies.put('language', result);
            $translate.use(result);
          });
        });
      } else {
        $translate.use($cookies.get('language'));
      }
    };
  }])
  .controller('LanguagePopUpController', function($scope, close) {
      'use strict';

      var defaultLanguage = 'fr';

      $scope.close = function(result) {
        if (!result) {
          result = defaultLanguage;
        }
        close(result, 500); // close, but give 500ms for bootstrap to animate
      };
  });
