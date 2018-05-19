


function Book(title, pubYear, price) {
	this.title = title;
	this.pubYear = pubYear;
	this.price = price;
}

var book1 = new Book("Raffi", 1880, 2500 );

Book.prototype.show = function() {
	console.log(`Title is ${this.title} \n PubYear is ${this.pubYear} \n Price is ${this.price}` );
}

book1.show();