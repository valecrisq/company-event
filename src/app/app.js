import angular from 'angular';

import template from './app.html';
import '../style/app.css';

import {userListComponent} from "./components/user-list/user-list.component";
import {UserService} from "./services/UserService";
import {currentUserComponent} from "./components/current-user/current-user.component";
import {userListItemComponent} from "./components/user-list-item/user-list-item.component";

export default angular
    .module('app', [])
    .component('app', {
        template
    })

    .service('UserService', UserService)
    .component('userList', userListComponent)
    .component('userListItem', userListItemComponent)
    .component('currentUser', currentUserComponent)

    .name;

