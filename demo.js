function showDate() {
    console.log(new Date().toLocaleString());
}

var intervalId = setInterval(showDate, 1000);
setTimeout(clearInterval, 11000, intervalId);
