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
		if (!this.userId){
			throw new Meteor.Error('removeComment.unauthorized');
		}else{
			Comments.remove(comment);
		}
		
	},

	changeSettings: function(setting){
		Settings.insert(setting);
	},
})