Router.configure({ 
	layoutTemplate: 'layout'
});

Router.map(function() { 
	this.route('pollSubmit', {path: '/'});

	this.route('pollShow', { 
  		path: '/polls/:_id',
    	waitOn: function() {
      		return [ Meteor.subscribe('singlePoll', this.params._id) ]; 
    	}, 
    	data: function() { return Polls.findOne(this.params._id); }
  	});

  	this.route('pollResults', {
  		path: '/polls/:_id/results',
  		data : function() {
  			var poll = Polls.findOne(this.params._id);
  			var votes = Votes.find({pollId: this.params._id}).fetch();

  			return {
  				poll: poll,
  				votes: votes
  			}
  		}
  	});
});