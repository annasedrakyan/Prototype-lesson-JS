

//constructor
function User(name, age) {
	this.x = name; //we should right this.name= name
	this.y = age;
	this.z = 10;
	this.foo = function () {
		console.log(this.x, this.y);//method of User object
		return true; //it returns something not to get undefined , but we cannot right
	}
}

//var user1 = new User(); //object is uppercase, creation empty object with new which is filled with function

var user1 = new User('anna', 20);  //this will become user1.x = anna   //constructor
var user2 = new User('naira', 21);

//console.log(use1.x); //anna
//user2.z = 10;
//user1.y = 20;


//console.log(user1.constructor) -- function

// x= "asas";
// x.length

//x.length is object when we put .  and then it will be deleted


//we can add new method for each user1 and user2 
//user1.foo2 = function() {}


//---------------------------------------

var o1 = {};
var o2 = new Object();


if(o1 == o2) {
	console.log('isFalse'); //but typeof is object for both
}


var arr1 = [];
var arr2 = new Array();  //both are objects


