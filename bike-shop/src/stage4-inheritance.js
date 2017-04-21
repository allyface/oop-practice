class Tire {
  constructor(diameter = 22, type = 'street', flat = false) {
    this.diameter = diameter
    this.type = type
    this.flat = flat
  }

  isFlat() {
    if (this.puncture === true) {
      this.flat = true
    } else if (this.repair === true) {
      this.flat = false
    }
    return this.flat
  }

  puncture() {
    this.flat = true
  }

  repair() {
    this.flat = false
  }
}

class Frame {
  constructor(color = 'black', size = 55, style = 'street') {
    this.color = color
    this.size = size
    this.style = style
  }
}

class Bike {
  constructor(name, price, moving = false) {
    this.name = name
    this.price = price
    this.tires = [new Tire(), new Tire()]
    this.frame = new Frame()
    this.rings = [3, 7]
    this.brakes = {
      front: true,
      back: true
    }
    this.moving = moving
  }

  isMoving() {
    if (this.pedal === true) {
      this.moving = true
    } else if (this.brake === true){
      this.moving = false
    }
    return this.moving
  }

  pedal() {
    if (this.tires[0].flat || this.tires[1].flat === true) {
      throw new Error("Can't pedal with a flat tire")
    } else {
      this.moving = true
    }
  }

  brake() {
    this.moving = false
  }

  gearSpeeds() {
    return (this.rings[0] * this.rings[1])
  }
}

class MountainBike extends Bike {
  constructor() {
    super()
    this.frame = {
      style: 'mountain'
    }
    this.tires = [new Tire('default', 'dirt'), new Tire('default', 'dirt')]
    this.shocks = 20
  }

  adjustShocks(newSagSetting) {
    this.shocks = newSagSetting
  }
}

class BMXBike extends Bike {
  constructor() {
    super()
    this.brakes = {
      front: false,
      back: true
    },
    this.tires = [new Tire(20), new Tire(20)]
  }
}

class RacingBike extends Bike {
  constructor() {
    super()
    this.frame = {
      style: 'racing'
    }
    this.tires = [new Tire('default', 'road'), new Tire('default', 'road')]
    this.rings = [3, 10]
  }

  gearSpeeds() {
    return this.rings[0] * this.rings[1]
  }
}

module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire,
  MountainBike: MountainBike,
  BMXBike: BMXBike,
  RacingBike: RacingBike
}
