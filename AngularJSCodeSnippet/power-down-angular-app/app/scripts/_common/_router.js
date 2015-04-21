powerDownApp.config(function ($urlRouterProvider, $stateProvider, $locationProvider, $httpProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise("/");
	$stateProvider
		.state('login', {
			url: "/login",
			templateUrl: "views/user/login.html",
			controller: 'LoginCtrl',
			controllerAs: 'vm'
		})
		.state('register', {
			url: "/register",
			templateUrl: "views/user/register.html",
			controller: 'RegisterCtrl',
			controllerAs: 'vm'
		})
		.state('allEvents', {
			url: "/",
			templateUrl: "views/events/allEvents.html",
			controller: 'AllEventsCtrl',
			controllerAs: 'vm'
		})
		.state('myEvents', {
			url: "/my-events",
			templateUrl: "views/events/myEvents.html",
			controller: 'MyEventsCtrl',
			controllerAs: 'vm'
		})
		.state('eventSummary', {
			url: "/events/:eventId",
			templateUrl: "views/events/eventSummary.html",
			controller: 'EventSummaryCtrl',
			controllerAs: 'vm'
		})
		.state('eventEdit', {
			url: "/events/:eventId/edit",
			templateUrl: "views/events/eventEdit.html",
			controller: 'EventEditCtrl',
			controllerAs: 'vm'
		})
		.state('createEvent', {
			url: "/create-event",
			templateUrl: "views/events/createEvent.html",
			controller: 'CreateEventCtrl',
			controllerAs: 'vm'
		})
		.state('settings', {
			url: "/settings",
			templateUrl: "views/user/settings.html",
			controller: 'SettingsCtrl',
			controllerAs: 'vm'
		});
});
