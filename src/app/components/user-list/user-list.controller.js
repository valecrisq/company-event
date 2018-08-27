export class UserListCtrl {
    constructor(UserService) {
        this.UserService = UserService;
    }

    async $onInit() {
        this.user = await this.UserService.getUsers(); // .then(result => result.data);
    }

    selectUser(user) {
        this.UserService.setCurrentUser(user);
    }
}