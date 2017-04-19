let calculator = {

  sum() {
    return this.a + this.b
  },

  mul() {
    return this.a * this.b
  },

  read() {
    this.a = +prompt('Please enter your first number:')
    this.b = +prompt('Please enter your second number:')
  },
};

calculator.read();
alert('The sum is: ' + calculator.sum());
alert('The product is: ' + calculator.mul());
