import angular from 'angular';

import template from './app.html';
import '../style/app.css';

export default angular
    .module('app', [])
    .component('app', {
        template
    }).name;

