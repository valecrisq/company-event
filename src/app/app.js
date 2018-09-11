import angular from 'angular';

import template from './app.html';
import '../style/app.css';
import CompanyService from "./services/CompanyService";
import EventService from "./services/EventService";
import {companyList} from "./components/company-list/company-list.component";
import {eventList} from "./components/event-list/event-list.component";

export default angular
    .module('app', [])
    .component('app', {
        template
    })

    .service('CompanyService', CompanyService)
    .service('EventService', EventService)
    .component('companyList', companyList)
    .component('eventList', eventList)
    .name;

