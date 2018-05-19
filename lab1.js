

// User is constructor
function User(name, age) {
	this.name = name; //we should right this.name= name
	this.age = age;
	this.isAdmin = false;
	this.say = function(w) {
		console.log(w + this.name);
	}


}

var u1 = new User('Anna', 20);

var u2 = new User('Naira', 25);
u1.say('Hello ');
u2.say('Hello ');

//User.prototype.say = 5; it will not override say in function
//delete u1.foo => u1.foo = 5;
User.prototype.x = 5; //u1.x = 5; u2.x = 6; but in User(x does not exist) like toString for example



for (var item in u1) {
	//console.log(item, u1[item]);  //user1.name = user1['name'] //with x
	if(u1.hasOwnProperty(item)) {
		console.log(item); //without x
	}
}