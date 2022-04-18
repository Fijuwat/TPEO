function car(model, year, color, mpg) {
    this.model = model;
    this.year = year ;
    this.color = color;
    this.mpg = mpg;
 
}

var car1 = new car("Toyota", 2000, "purple", 20);
var car2 = new car("Toyota", 2001, "pink", 21);
var car3 = new car("Toyota", 2018, "green", 22);

console.log(car1["mpg"]);
console.log(car2["mpg"]);
console.log(car3["mpg"]);


function vehicle(car) {
    this.car = car ;
}

var vehicle1 = new vehicle(car1);
var vehicle2 = new vehicle(car2);
var vehicle3 = new vehicle(car3);

console.log(vehicle1.car.mpg);
console.log(vehicle2.car.mpg);
console.log(vehicle3.car.mpg);