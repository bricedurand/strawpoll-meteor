Polls = new Meteor.Collection2("polls", {
    schema: {
        question: {
            type: String,
            label: "Question"
        },
        author: {
            type: String,
            label: "Author"
        }
    }
});