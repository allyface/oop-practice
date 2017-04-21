function Calculator() {
  this.sum = function() {
    return this.a + this.b
  },

  this.mul = function() {
    return this.a * this.b
  },

  this.read = function() {
    this.a = +prompt('Please enter your first number:')
    this.b = +prompt('Please enter your second number:')
  }
};

let calculator = new Calculator();
calculator.read();

alert('The sum is: ' + calculator.sum());
alert('The product is: ' + calculator.mul());
