powerDownApp.directive('eventCard', function ($rootScope, eventService) {
	return {
		restrict: 'EA',
		replace: true,
		scope: {
			event: '='
		},
		templateUrl: '/views/events/eventCard.html',
		bindToController: true,
		controllerAs: 'vm',
		controller: function () {
			var vm = this;
			vm.joined = false;
			vm.activeUser = $rootScope.activeUser;

			if ($rootScope.activeUser && vm.event.attendees) {
				for (var key in vm.event.attendees) {
					if (key === $rootScope.activeUser.id) {
						vm.joined = true;
						break;
					}
				}
			}

			vm.joinEvent = function () {
				eventService.joinEvent(vm.event.uid, $rootScope.activeUser);
				vm.joined = true;
			};

			vm.leaveEvent = function () {
				eventService.leaveEvent(vm.event.uid, $rootScope.activeUser.id);
				vm.joined = false;
			};

		}
	}
});
