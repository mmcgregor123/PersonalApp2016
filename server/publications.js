Meteor.publish("theComments",function(){return Comments.find();});
Meteor.publish("theTutors",function(){return Tutors.find();});