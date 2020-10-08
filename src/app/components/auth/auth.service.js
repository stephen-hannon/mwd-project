function AuthService(Parse) {
    this.register = function(userData) {
        var user = new Parse.User();
        user.set('username', userData.username);
        user.set('password', userData.password);
        user.set('email', userData.email);

        user.signUp().then(result => {
            console.log('successfully signed up', result);
        }).catch(err => {
            console.error('Unable to sign up', err);
        })
    }

    this.login = function(user) {
        Parse.User.logIn(user.username, user.password).then(result => {
            console.log('successfully signed up', result);
        }).catch(err => {
            console.error('Unable to sign up', err);
        })
    }
    
    this.isAuthenticated = function() {
        return !!Parse.User.current();
    }
}

angular
    .module('components.auth')
    .service('AuthService', AuthService);