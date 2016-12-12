/**
 * Created by anabelacarvalho on 15/11/16.
 */
angular
  .module('kub.mainMenu', [])
  .directive('mainMenu', function() {
    'use strict';
    return {
      templateUrl: 'views/main-menu.html'
    };
  })
  .controller('MenuCtrl', ['$scope', '$location', function($scope, $location) {
    'use strict';
    var menuTabs = {
      'home': {
        urlMatch: ['home']
      },
      'about': {
        urlMatch: ['about']
      },
      'gallery': {
        urlMatch: ['gallery']
      },
      'contact': {
        urlMatch: ['contact']
      }
    };

    $scope.isActive = function (tab) {
      var path = $location.path().split('/')[1];

      if (path) {
        return menuTabs[tab].urlMatch.some(function (urlTab) {
          return path.indexOf(urlTab) !== -1;
        });
      } else {
        return tab === 'home';
      }

    };
  }]);
