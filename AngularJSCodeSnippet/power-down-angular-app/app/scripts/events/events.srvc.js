powerDownApp.factory('eventService', function ($firebase, $http, config, $rootScope, $state) {

	var eventsRef = new Firebase(config.firebaseUrl + '/events/');

	return {
		getAllEvents: function () {
			return $firebase(eventsRef).$asArray().$loaded();
		},

		getEvent: function (id) {
			return $firebase(eventsRef.child(id)).$asObject().$loaded();
		},

		createEvent: function (eventObj) {
			var allEvents = $firebase(eventsRef).$asArray();
			allEvents.$add(eventObj).then(function (newRef) {
				var id = newRef.key();
				var index = allEvents.$indexFor(id);
				allEvents[index].uid = id;
				allEvents.$save(index);
				$rootScope.$broadcast('addAlert', {type: 'success', msg: 'Event has been created.'});
				$state.go('eventSummary', {eventId: id});
			});
		},

		joinEvent: function (eventId, userObj) {
			$firebase(eventsRef.child(eventId).child('attendees').child(userObj.id)).$set(userObj.userName);
		},

		leaveEvent: function (eventId, userId) {
			$firebase(eventsRef.child(eventId).child('attendees').child(userId)).$remove();
		},

		getHttpExample_DateTime: function () {
			return $http.get('http://date.jsontest.com');
		},

		getHttpExample_IP: function () {
			return $http({
				method: 'GET',
				url: 'http://ip.jsontest.com',
				withCredentials: false,
				headers: {
					'Content-Type': undefined
				}
			});
		}

	}
});
