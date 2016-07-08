Template.addTutor.events({
"click .js-addTutor": function(event){
		const name =$(".js-name").val();
		const email= $(".js-email").val();
		const sub=$(".js-sub").val();
		const tutor = {name:name, email:email, subject:sub};
		console.dir(tutor);
		Meteor.call("getInfo", tutor);
		$(".js-name").val("");
		$(".js-email").val("");
		$(".js-sub").val("");
		Router.go('/showTutors');
	},
});