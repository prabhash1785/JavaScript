powerDownApp.controller('AllEventsCtrl', function ($scope, $firebase, eventService) {
	var vm = this;

	eventService.getAllEvents().then(function (data) {
		vm.events = data;
	});

});
