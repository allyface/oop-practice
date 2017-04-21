function Bike(name, price, moving = false) {
  this.name = name,
  this.price = price,
  this.tires = [new Tire(), new Tire()],
  this.frame = new Frame(),
  this.rings = [3, 7],
  this.brakes = {
    front: true,
    back: true
  },
  this.moving = moving
}

Bike.prototype.isMoving = function () {
  if (this.pedal === true) {
    this.moving = true
  } else if (this.brake === true){
    this.moving = false
  }
  return this.moving
}

Bike.prototype.pedal = function () {
  if (this.tires[0].flat || this.tires[1].flat === true) {
    throw new Error("Can't pedal with a flat tire")
  } else {
    this.moving = true
  }
}

Bike.prototype.brake = function () {
  this.moving = false
}

Bike.prototype.gearSpeeds = function () {
  return (this.rings[0] * this.rings[1])
}

function Frame(color = 'black', size = 55, style = 'street') {
  this.color = color,
  this.size = size,
  this.style = style
}

function Tire(diameter = 22, type = 'street', flat = false) {
  this.diameter = diameter,
  this.type = type,
  this.flat = flat
}

Tire.prototype.isFlat = function () {

  if (this.puncture === true) {
    this.flat = true
  } else if (this.repair === true) {
    this.flat = false
  }
  return this.flat
}

Tire.prototype.puncture = function () {
  this.flat = true
}

Tire.prototype.repair = function () {
  this.flat = false
}

module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire
}
