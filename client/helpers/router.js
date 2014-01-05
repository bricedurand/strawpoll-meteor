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
});