function Bike(name, price) {
  this.name = name,
  this.price = price,
  this.tires = [new Tire(), new Tire()],
  this.frame = new Frame(),
  this.rings = [3, 7],
  this.brakes = {
    front: true,
    back: true
  }
}

function Frame(color = 'black', size = 55, style = 'street') {
  this.color = color,
  this.size = size,
  this.style = style
}

function Tire(diameter = 22, type = 'street') {
  this.diameter = diameter,
  this.type = type
}

module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire
}
