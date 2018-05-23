


function Point(x,y) {
	this.x = x; 
	this.getCoords = function() {
		return [this.x, this.y];
	};
}

var start = new Point(10,20);
//var coords = start.getCoords();
//console.log(start);

Point.prototype.add = function(obj) {
      return new Point (
      	this.x + obj.x, this.y + obj.y);
};

 var start = new Point(10,10);
 var finish = new Point(20,20);
 var line = start.add(finish);


console.log(line);

