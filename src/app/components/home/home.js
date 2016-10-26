import angular from 'angular';
import uiRouter from 'angular-ui-router';

import './home.css';
import template from './home.html';

class HomeCtrl {
  constructor($log) {
    // $log.info('HomeCtrl instantiated');
    this.title = 'Home Works!';
  }
}

HomeCtrl.$inject = ['$log'];

let home = () => {
  return {
    template: template,
    controller: HomeCtrl,
    controllerAs: 'ctrl'
  }
};


const MODULE_NAME = 'home';

angular.module(MODULE_NAME, [uiRouter])
  .config(function($stateProvider, $urlRouterProvider) {
    // For initial application load from base url
    $urlRouterProvider.otherwise('/');
    // defines routing for this component
    $stateProvider.state('home', {
      url: '/',
      template: '<home></home>'
    });
  })
  .directive('home', home);

export default MODULE_NAME;
