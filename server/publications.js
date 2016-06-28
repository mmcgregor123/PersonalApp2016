Meteor.publish("theTutors",
	function(){return Tutors.find();})

Meteor.publish("theComments",
	function(){return Comments.find();})

Meteor.publish("userData", function(){
	if(this.userId) {
		return Meteor.users.find({});

	}else{
		this.ready();
	}
});