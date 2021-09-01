function Cat() {
	this.stomatch = [];
}

Cat.prototype.eat = function(Mouse) {
	this.stomatch.push(mouse);
};

module.exports = Cat;