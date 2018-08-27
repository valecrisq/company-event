import template from './user-list-item.component.html';

export const userListItemComponent = {
    template,
    bindings: {
        user: '<',
        onClick: '&'
    }
};