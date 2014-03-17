Template.pollSubmit.events({ 
	'submit form': function(e) {
		e.preventDefault();

		var form = $(e.target);
		var options = [];
		["1", "2", "3", "4"].forEach(function(index) {
			var option = form.find('[name=option'+index+']').val();
			if (option.length)
		    	options.push(option);
		});


		var poll = {
			question: form.find('[name=question]').val(),
			options: options
		}
		poll._id = Polls.insert(poll);
		Router.go('pollShow', poll); 
	}
});
