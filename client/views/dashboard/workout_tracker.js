Template.workoutTracker.helpers({

	workoutLogEntry: function() {
		return WorkoutTracker.find({},
			{
			  sort: {day: -1},
			});
	},


	'noWorkouts' : function() {
		return WorkoutTracker.find({}).count() === 0 ? true : false;
	},

	
});
