export class UserListCtrl {
    constructor(UserService) {
        this.UserService = UserService;
    }

    $onInit() {
        this.UserService.getUsers().then(result => {
            this.users = result.data;
        });
    }

    selectUser(user) {
        this.UserService.setCurrentUser(user);
    }
}