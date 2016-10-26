import angular from 'angular';
import uiRouter from 'angular-ui-router';

import './about.css';
import template from './about.html';

class AboutCtrl {
  constructor($log) {
    // $log.info('AboutCtrl instantiated');
    this.title = 'About Works too!';
  }
}

AboutCtrl.$inject = ['$log'];

let about = {
    template: template,
    controller: AboutCtrl
};

const MODULE_NAME = 'about';

angular.module(MODULE_NAME, [uiRouter])
 .config(($stateProvider) => {
    $stateProvider.state('about', {
      url: '/about',
      template: '<about></about>'
    });
  })
  .component('about', about);

  export default MODULE_NAME;
