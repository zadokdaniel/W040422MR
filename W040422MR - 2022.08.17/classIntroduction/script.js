function Car(numberOfWheels, engine) {
  return {
    tank: 0,
    wheels: numberOfWheels,
    km: 0,
    engine,
    drive(km) {},
    fuel(liters) {},
  };
}

const car1 = Car(2, 1200);
const car2 = Car(5, 25485);

console.log(car1);
console.log(car2);
