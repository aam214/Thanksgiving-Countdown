const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const ThanksgivingDate = new Date("Nov 28, 2024").getTime()
countDown()

function countDown() {
const currentTime = new Date().getTime();
const gap = ThanksgivingDate - currentTime;
const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

let daysNow = Math.floor(gap / days);
let hoursNow = Math.floor((gap % days) / hours);
let minutesNow = Math.floor((gap % hours) / minutes);
let secondsNow = Math.floor((gap % minutes) / seconds);

hoursNow= hoursNow < 10 ? '0' + hoursNow : hoursNow;
minutesNow = minutesNow < 10 ? '0' + minutesNow : minutesNow;
secondsNow = secondsNow < 10 ? '0' + secondsNow : secondsNow;

daysElement.innerHTML= daysNow;
hoursElement.innerHTML = hoursNow;

minutesElement.innerHTML = minutesNow;
secondsElement.innerHTML = secondsNow;

setTimeout(() => {
  countDown();
}, 1000);
}

