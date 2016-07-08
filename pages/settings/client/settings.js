Template.settings.events({
	"click .js-change-greeting": function(event){
		console.dir("click");
		const greeting= $(".js-greeting").val();
		const id= Meteor.userId();
		const setting={greeting:greeting, id:id};
		console.dir(setting);
		Meteor.call("changeSettings", setting);
		Router.go('/');
	}
})