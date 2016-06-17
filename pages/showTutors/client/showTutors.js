Template.showTutors.helpers({
	tutors: function(){
		return Tutors.find()

	}
})

Template.showTutors.events({
	"click .js-addTutor": function(event){
		console.log("click");
		const name =$(".js-name").val();
		const email= $(".js-email").val();
		const sub=$(".js-sub").val();
		const tutor = {name:name, email:email, subject:sub};
		console.dir(tutor);
		Tutors.insert(tutor);
	}
})

