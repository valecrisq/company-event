import {config} from './config';

export default class CompanyService {
    constructor($http) {
        this.$http = $http;
    }

    getChildCompanies() {
        return this.$http.get('https://qauk-staging.bookingbug.com/api/v1/company/40227/children', config)
    }

    getChildAddress(company) {
        return this.$http.get(`https://qauk-staging.bookingbug.com/api/v1/${company.id}/addresses`, config)
    }
}
