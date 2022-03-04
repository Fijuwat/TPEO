
function triangleArea(base, height) {
    return base*height*0.5;
}

var area = triangleArea(5, 10);
var area2 = triangleArea(2, 4);
var area3 = triangleArea(4, 20);

console.log(area)
console.log(area2)
console.log(area3)

function convertFeetToInches(length) {
    return length*12
}