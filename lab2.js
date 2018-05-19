


// Object.prototype.y = 10;
//   var a = [];  //as a is object it will have y 
//   a.y  = 10;





function User(name, age) {
	this.name = name;
	this.age = age;
}

User.prototype.foo = function() {
	return new User(this.name, this.age);
}

var user1  = new User('Anna' , 20);


 