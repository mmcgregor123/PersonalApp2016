Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/',{name:"home"});
Router.route('comments');
Router.route('showTutors');
Router.route('about');

Router.route('/showtutor/:_id',
	{name:"showTutor",
		data: function(){
			const c =Tutors.findOne({_id:this.params._id});
			console.dir(c);
			return c
			}		
	}
);