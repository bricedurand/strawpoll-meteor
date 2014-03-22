Template.pollResults.helpers({
	optionCount : function(option) {
		return Votes.find({ option: option}).count();
	}
});