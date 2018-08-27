export class CurrentUserCtrl {
    constructor(UserService) {
        this.UserService = UserService;
    }

    get user() {
        return this.UserService.getCurrentUser();
    }
}