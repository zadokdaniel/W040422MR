function Car(/* this */ color) {
  this.tank = 0;
  this.km = 0;
  this.color = color;
}

Car.prototype.fuel = function (/* this */ liters) {
  if (liters > 0 && this.tank + liters < 35) {
    this.tank += liters;
  }
};

Car.prototype.drive = function (km) {
  const burnt = km * 0.2;
  if (km > 0 && this.tank - burnt > 0) {
    this.km += km;
    this.tank -= burnt;
  }
};

const car1 = new Car("black");
const car2 = new Car("red");

console.log("car1", car1);

car1.fuel(/* car1 */ 2);

console.log("car1", car1);

car1.drive(/* car1 */ 2);

console.log("car1", car1);

car1.fuel(/* car1 */ 50);

console.log("car1", car1);

car1.fuel(/* car1 */ 25);

console.log("car1", car1);

console.log("car2", car2);
