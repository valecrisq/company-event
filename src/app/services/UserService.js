export class UserService {
    constructor($http) {
        this.$http = $http;

        this.currentUser = null;
    }

    getUsers() {
        return this.$http.get('https://jsonplaceholder.typicode.com/users');
    }

    setCurrentUser(user) {
        this.currentUser = user;
    }

    getCurrentUser() {
        return this.currentUser;
    }
}