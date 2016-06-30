

Template.myProfile.events({
	"click .js-addProfile": function(event){
		const firstName =$(".js-firstName").val();
		const lastName= $(".js-lastName").val();
		const nickname=$(".js-nickname").val();
		const email=$(".js-email").val();
		const birthYear=$(".js-year").val();
		const profile = {firstName:firstName, lastName:lastName, nickname:nickname, email:email, birthYear:birthYear, id:Meteor.userId()};
		console.dir(profile);
		Meteor.call("addProfile", profile);
		Router.go('/profiles');
	}
})