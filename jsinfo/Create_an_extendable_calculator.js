function Calculator() {
  this.calculate = function(str) {
    let arr = str.split(' ')
    this.a = parseInt(arr[0])
    this.op = arr[1]
    this.b = parseInt(arr[2])
    return this.operands[this.op](this.a, this.b)
  },

  this.addMethod = function(name, func) {
    this.operands[name] = func
  },

  this.operands = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  }
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 / 4");
console.log(result);
