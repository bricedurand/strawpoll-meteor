PollForm = new AutoForm(Polls);

PollForm.hooks({
	after: {
		insert: function(error, result) {
			debugger;
			Router.go('pollShow', {_id: poll._id});
		}
	},
	onSuccess: function(operation, result, template) {
			debugger;
	}
});

