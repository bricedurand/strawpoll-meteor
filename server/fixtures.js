if (Polls.find().count() === 0) { 
	Polls.insert({
		title: 'Which champ should I play ?',
		author: 'PL'
	});
	Polls.insert({
		title: 'What dance should I do ?',
		author: 'NightBlue'
	});
}