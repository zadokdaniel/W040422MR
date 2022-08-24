class Car {
  // STATIC PROPERTIES use Car.staticProperty
  static someGeneralData = 55;
  static someGeneralFunction() {}

  // PROPERTIES
  tank = 0;
  color;

  // CONSTRUCTOR
  constructor(color) {
    /** because of lines 3-4 */
    // this.tank = 0;
    // this.color;

    this.color = color;
  }

  // METHODS
  fuel(liters) {
    if (liters > 0 && this.tank + liters <= 35) {
      this.tank += liters;
    }
  }
}

console.log(new Car());
console.log(new Car());
console.log(new Car());

function Car(/*this*/) {
  this.name = "sdfd";
}

new Car(/* { [[prototype]]: Car.prototype } */);
