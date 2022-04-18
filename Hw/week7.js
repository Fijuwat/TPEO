var color = ["Green"]
var id = []
var Car = []

for (var i = 1; i<=10; i++){
    for (var j = 1; j<=10; j++){
        Car[i*j] = {
            model: "toyota",
            color: color,
            year: 2002,
            mpg: 28.8,
            id: [i*j],
        }
    }
} 

console.log(Car[5].id)
console.log(Car[20].id)
console.log(Car[100].id)


function getCarsBetweenIds(idMin, idMax) {
    newCar = []
    color[0] = "blue"
    for (var i = idMin; i <= idMax; i++){
        Car.color = "blue"
        newCar.push(Car[i])
    }
    return newCar
}
console.log(getCarsBetweenIds(1, 4))
