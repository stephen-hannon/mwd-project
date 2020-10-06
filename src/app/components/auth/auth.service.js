function AuthService(Parse) {
    this.register = function(user) {
        var user = new Parse.user();
        user.set('username', user.username);
        user.set('password', user.password);
        user.set('email', user.email);

        try {
            await user.signUp();
        } catch (err) {
            console.error('Unable to sign up', err);
        }
    }

    this.login = function(user) {
        await Parse.User.logIn(user.username, user.password);
    }
    
    this.isAuthenticated = function() {
        return !!Parse.User.current();
    }
}

angular
    .module('components.auth')
    .service('AuthService', AuthService);