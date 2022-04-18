/*
function  powersOfThree() {
    for (var i = 0; i < 10; i++ ){
        var a = 3**i;
        console.log(a);
        if (i==1){
            console.log("This is my favorite power of three!");
        }
    }
}

var hello = setTimeout(powersOfThree, 3000);
*/


function clear (a) {
    clearInterval(a);
}

function everyTenSeconds() {
    var a = setInterval(console.log, 10000, "Hello World!");
    setTimeout(clear, 130000, a)
}

everyTenSeconds()
