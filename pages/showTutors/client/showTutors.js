Template.showTutors.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    subject: null,
  });
});


Template.showTutors.helpers({
	tutors: function(){
		const instance= Template.instance();
		const s = instance.state.get("subject");
		if(s==null){
			return Tutors.find();
		}
		else{
			return Tutors.find({subject: s});
		}

	},
	

	
})

Template.showTutors.events({
	"click .js-addTutor": function(event){
		const name =$(".js-name").val();
		const email= $(".js-email").val();
		const sub=$(".js-sub").val();
		const tutor = {name:name, email:email, subject:sub};
		console.dir(tutor);
		Meteor.call("getInfo", tutor);
	},

	"click .js-showSubject": function(event){
		const subject=$(".js-subject").val();
		console.dir(subject);
		const instance= Template.instance();
		instance.state.set("subject", subject);
		$(".js-subject").val("");
	},

})



