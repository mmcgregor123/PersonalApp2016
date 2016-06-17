Meteor.startup(function(){
	if (Tutors.find().count()==0){
	Tutors.insert({name: "Mike", email: "mikem@brandeis.edu", subject: "math"})
	Tutors.insert({name: "Steve", email: "Steve@brandeis.edu", subject: "cosi"})
	Tutors.insert({name: "Jeff", email: "Jeff@brandeis.edu", subject: "bio"})
	Tutors.insert({name: "Sarah", email: "Sarah@brandeis.edu", subject: "chem"})
	Tutors.insert({name: "Dave", email: "Dave@brandeis.edu", subject: "econ"})
}})