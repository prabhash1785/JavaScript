powerDownApp.filter('myCreatedEvents', function () {
	return function (events, userId) {

		var filtered = [];

		if (events) {
			for (var i = 0; i < events.length; i++) {
				var event = events[i];
				if (event.organizer.id === userId) {
					filtered.push(event);
				}
			}
		}

		return filtered;
	};
});
