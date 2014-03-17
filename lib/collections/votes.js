Votes = new Meteor.Collection2("votes", {
    schema: {
        pollId: {
            type: String
        },
        option: {
        	type: String
        }
    }
});