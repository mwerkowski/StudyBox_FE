(function() {
  'use strict';

  angular
    .module('studyBoxFe')
    .directive('card', CardDirective)
    .controller('CardController', CardController);


  /** @ngInject */
  function CardController() {
    var vm = this;
  }

  function CardDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/partials/card.html',
      controller: 'CardController',
      controllerAs: 'card'
    }
  }
})();
