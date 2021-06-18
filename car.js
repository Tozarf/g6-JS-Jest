class Car {
  model = "not defined";
  year = "not specified";
  wheels = 4;
  gas = 0; // gas availability
  kmPerLt = 0;
  color = "not specified";
  hybrid = false;
  tank = 0; // gas cap
  kms = 0;

  constructor(model, color, kmPerLt, tank, price, year, gas) {
    this.model = model;
    this.color = color;
    this.kmPerLt = kmPerLt;
    this.tank = tank;
    this.price = price;
    this.year = year;
    this.gas = gas;
  }

  availableGasSpace() {
    return this.tank - this.gas;
  }

  addGas(liters) {
    return (this.gas += liters);
  }

  currentGas() {
    return this.gas;
  }

  maximumDistanceToTravel() {
    return this.gas * this.kmPerLt;
  }

  move(kms) {
    this.maximumDistanceToTravel();
    if (kms > this.maximumDistanceToTravel()) {
      this.km += this.maximumDistanceToTravel();
      this.gas -= this.maximumDistanceToTravel() / this.kmPerLt;
    } else {
      this.kms += kms;
      this.gas -= kms / this.kmPerLt;
    }
  }

  get currentValue() {
    const time = new Date();
    const currentYear = time.getFullYear();
    let newPrice = this.price;

    for (let diff = currentYear - this.year; diff > 0; diff--) {
      newPrice -= newPrice * 0.2;
    }
    return newPrice;
  }
}

module.exports = Car;
