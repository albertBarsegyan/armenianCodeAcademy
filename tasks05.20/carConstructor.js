/* Car Constructor
Write a Car constructor that initializes model and milesPerGallon from arguments.
All instances built with Car:
should initialize with an tank at 0
should initialize with an odometer at 0
Give cars the ability to get fueled with a .fill(gallons) method. Add the gallons to tank. -
STRETCH: Give cars ability to .drive(distance). The distance driven:
Should cause the odometer to go up.
Should cause the the tank to go down taking milesPerGallon into account.
STRETCH: A car which runs out of fuel while driving can't drive any more distance:
The drive method should return a string "Iran out of fuel at x miles!" x being odometer.*/

function CarConstructor(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
  this.fill = function (gallons) {
    this.tank += gallons;
  };
  this.drive = function (distance) {
    let maxDistance = this.tank / this.milesPerGallon;
    if (distance > maxDistance) {
      this.tank = 0;
      this.odometer = maxDistance;
      return `I run out of fuel at ${maxDistance}`;
    } else {
      this.odometer = distance;
      this.tank -= distance * this.milesPerGallon;
      return `Odometer: ${this.odometer} , Tank: ${this.tank}`;
    }
  };
  this.carInfo = function () {
    return `Model :${this.model} `;
  };
}
let carConst = new CarConstructor('bmw', 1);
carConst.fill(500);
console.log(carConst);
console.log(carConst.drive(100));
