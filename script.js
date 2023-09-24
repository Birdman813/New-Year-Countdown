let countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();
let daysValue = document.getElementById("days");
let hoursValue = document.getElementById('hours');
let minutesValue = document.getElementById("minutes");
let secondsValue = document.getElementById("seconds");
let congratulation = document.getElementById("congratulation")

console.log(daysValue);
console.log(hoursValue);

let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    daysValue.innerHTML = days;
    hoursValue.innerHTML = hours;
    minutesValue.innerHTML = minutes;
    secondsValue.innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        congratulation.innerHTML = "HAPPY NEW YEAR!!!";
    }
}, 1000)