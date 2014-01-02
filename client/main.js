Meteor.subscribe('polls');

Template.poll.helpers({
	poll: function() {
		return Polls.findOne();
	}
});