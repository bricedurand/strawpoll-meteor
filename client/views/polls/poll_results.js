Template.pollResults.helpers({
	optionCount : function(option) {
		return Votes.find({ option: option}).count();
	}
});

Template.pollResults.rendered = function() {
	var chart = $('#resultChart');
	var poll = Polls.find(chart.data('poll-id'));
	var votes = Votes.find({
		pollId: chart.data('poll-id')
	});

	votes_array = [];
	votes.forEach(function(vote) { votes_array.push(vote.option) });
	votes_obj = _.reduce(votes_array,function(counts,key){ counts[key]++; return counts },
                  _.object( _.map( _.uniq(votes_array), function(key) { return [key, 0] })));
	
	var pie_colors = ["Red", "Green", "Yellow"];
	var pie_labels = Object.keys(votes_obj);

	var data =[];
	Object.keys(votes_obj).forEach(function(value, index) { 
		data.push({ value: votes_obj[value],  color: pie_colors[index], label: pie_labels[index]}) 
	});

	var options = {
	    //Boolean - Whether we should show a stroke on each segment
	    segmentShowStroke : true,

	    //String - The colour of each segment stroke
	    segmentStrokeColor : "#fff",

	    //Number - The width of each segment stroke
	    segmentStrokeWidth : 2,

	    //Number - Amount of animation steps
	    animationSteps : 100,

	    //String - Animation easing effect
	    animationEasing : "easeOutBounce",

	    //Boolean - Whether we animate the rotation of the Doughnut
	    animateRotate : true,

	    //Boolean - Whether we animate scaling the Doughnut from the centre
	    animateScale : false
	};

	var ctx = chart.get(0).getContext("2d");
	var resultPieChat = new Chart(ctx).Pie(data,options);
}