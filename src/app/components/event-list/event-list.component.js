import template from './event-list.html';
import controller from './event-list.controller';

export const eventList = {
    template,
    controller,
    bindings: {
        company: '<'
    }
};
