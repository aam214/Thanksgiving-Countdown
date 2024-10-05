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
}