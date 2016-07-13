Meteor.publish("theComments",function(){return Comments.find();});
Meteor.publish("theTutors",function(){return Tutors.find();});
Meteor.publish("theSettings", function(){
	if(this.userId){
		return Settings.find({id:this.userId});
	}else{
		this.ready();
	}
	
});

Meteor.users.deny({
  update() { return true; }
});
