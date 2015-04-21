'use strict';

var powerDownApp = angular.module('powerDownApp', [
  'ngAnimate',
	'ngTouch',
	'ngSanitize',
	'ngMessages',
	'ui.bootstrap',
	'ui.router',
	'firebase'
]);

powerDownApp.run(function ($rootScope, $firebase) {
	var ref = new Firebase("https://popping-torch-8104.firebaseio.com");
	var authData = ref.getAuth();
	if (authData) {
		var userProfile = $firebase(ref.child('users').child(authData.uid)).$asObject();
		userProfile.$bindTo($rootScope, "activeUserTemp").then(function () {
			$rootScope.activeUser = angular.copy($rootScope.activeUserTemp);
		});
	}
});
