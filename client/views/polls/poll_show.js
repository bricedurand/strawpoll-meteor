Template.pollShow.events({ 
	'submit form': function(e) {
		e.preventDefault();

		var form = $(e.target);
		
		var poll = Polls.findOne(form.find('[name=pollId]').val());
		
		var vote = {
			pollId: poll._id,
			option: form.find('[name=option]:checked').val()
		}

		Votes.insert(vote);

		
		Router.go('pollResults', poll); 
	}
});