Template.quiz4.helpers({
	bios: function(){
		return Bios.find();
	}

})

Template.quiz4.events({

	"click .js-submit": function(event){
		const name= $(".js-name").val();
		const text= $(".js-bio").val();
		const bio={name:name, text:text};
		Meteor.call("addBio", bio);
		$(".js-name").val("");
		$(".js-bio").val("");
	},
})