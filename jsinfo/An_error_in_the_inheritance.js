function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  console.log(this.name + ' walks');
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype.__proto__ = Animal.prototype;

Rabbit.prototype.walk = function() {
  console.log(this.name + " bounces!");
};

let rabbit = new Rabbit('Bootsie')
console.log(rabbit.walk())
