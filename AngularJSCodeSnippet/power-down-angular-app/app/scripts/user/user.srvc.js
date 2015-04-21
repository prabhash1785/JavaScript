powerDownApp.factory('userService', function ($firebase, config, $rootScope, $state) {

	var authRef = new Firebase(config.firebaseUrl);

	return {
		logout: function () {
			authRef.unauth();
			delete $rootScope.activeUser;
			$rootScope.$broadcast('addAlert', {type: 'success', msg: 'You have logged out.'});
			$state.go('allEvents', {}, {reload: true});
		},

		login: function (userEmail, userPW) {
			authRef.authWithPassword({
				email: userEmail,
				password: userPW
			}, function (error, authData) {
				if (!error) {
					$firebase(authRef.child('users').child(authData.uid)).$asObject().$loaded().then(function (obj) {
						$rootScope.activeUser = obj;
						$rootScope.$broadcast('addAlert', {type: 'success', msg: 'You are now logged in.'});
						$state.go('allEvents');
					});
				} else {
					$rootScope.$broadcast('addAlert', {type: 'danger', msg: error.message});
				}
			});
		},

		register: function (userName, userEmail, userPW) {
			var that = this;
			authRef.createUser({
				email: userEmail,
				password: userPW
			}, function (error, auth) {
				if (error === null) {
					$firebase(authRef.child('users').child(auth.uid)).$set({
						email: userEmail,
						userName: userName,
						id: auth.uid
					});
					that.login(userEmail, userPW);
				} else {
					$rootScope.$broadcast('addAlert', {type: 'danger', msg: error.message});
				}

			});
		}

	}
});
