Meteor.publish('polls', function() { 
	return Polls.find();
});

Meteor.publish('singlePoll', function(id) { 
	return id && Polls.find(id);
});