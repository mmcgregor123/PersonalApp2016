Template.addTutor.events({
"click .js-addTutor": function(event){
		const name =$(".js-name").val();
		const email= $(".js-email").val();
		const sub=$(".js-sub").val();
		const rate=$(".js-rate").val();
		const location=$(".js-location").val();
		const availability=$(".js-availability").val();
		const credentials=$(".js-credentials").val();


		const tutor = {name:name, email:email, subject:sub, rate:rate, location:location, availability:availability, credentials:credentials};
		console.dir(tutor);
		Meteor.call("getInfo", tutor);
		$(".js-name").val("");
		$(".js-email").val("");
		$(".js-sub").val("");
		Router.go('/showTutors');
	},
});