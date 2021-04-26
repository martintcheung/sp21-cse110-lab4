var intervalID = setInterval(showTime, 1000);

function showTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}