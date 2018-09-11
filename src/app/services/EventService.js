import {config} from './config';

export default class EventService {
    constructor($http) {
        this.$http = $http;
    }

    getEvents(company) {
        return this.$http.get(`https://qauk-staging.bookingbug.com/api/v1/${company.id}/events?end_date=30-03-2018`, config)
    }

}
