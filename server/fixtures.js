if (Polls.find().count() === 0) { 
	Polls.insert({
		question: 'Which champ should I play ?',
		author: 'PL'
	});
	Polls.insert({
		question: 'What dance should I do ?',
		author: 'NightBlue'
	});

	Options.insert({
		title: 'Lee Sin',
		pollId: champPoll._id
	});

	Options.insert({
		title: 'Elise',
		pollId: champPoll._id
	});

	Options.insert({
		title: 'Evelynn',
		pollId: champPoll._id
	});


}