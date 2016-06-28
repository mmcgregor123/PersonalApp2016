Meteor.methods({
	getInfo: function(tutor){
	Tutors.insert(tutor);
	},

	sayhilib: function(){
		console.log("hi")
	},

	addComment: function(comment){
		Comments.insert(comment);
	},

	removeComment: function(comment){
		Comments.remove(comment);
	},
})