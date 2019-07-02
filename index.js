const timeNow = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    document.getElementById(
        "today"
    ).innerHTML = `${date}`;
};
setInterval(timeNow, 1000);

const shvr = new Date("September 6, 2019 08:00:00").getTime();
console.log(shvr);

let mainEvent = setInterval(function () {
    let timeToday = new Date().getTime();
    let distance = shvr - timeToday;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = `0${days}`.slice(-2);
    document.getElementById("hours").innerHTML = `0${hours}`.slice(-2);
    document.getElementById("minutes").innerHTML = `0${minutes}`.slice(-2);
    document.getElementById("seconds").innerHTML = `0${seconds}`.slice(-2);

}, 1000);