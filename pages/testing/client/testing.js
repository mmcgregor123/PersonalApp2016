

function ComplexNumber(re,im){
	this.re=re;
	this.im=im;
}

ComplexNumber.prototype.double= function() {
	this.re= 2*this.re;
	this.im= 2*this.im;
}

ComplexNumber.prototype.square= function() {
	const re1= 2*this.re;
	const im1 = 2*this.im;
	this.re= re1;
	this.im= im1;
}

const num= new ComplexNumber(1,2);
num.double();
num.square();

Template.testing.helpers({
	num: function(){return num;}
});