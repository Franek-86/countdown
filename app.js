const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const data = document.querySelector(".giveaway");
const dead = document.querySelector(".deadline");
const da = document.querySelector(".giorni");
const ho = document.querySelector(".hours");
const mi = document.querySelector(".minutes");
const se = document.querySelector(".seconds");

const unusual = document.querySelectorAll(".deadline h4");

let date = new Date(2022, 7, 34, 12, 12, 01);

const year = date.getFullYear();
const day = weekdays[date.getDay()];
let number = date.getDate();
number = number.toString();

if (number.length <= 1) {
  number = `0${number}`;
}

const month = months[date.getMonth()];
let hours = date.getHours();
let minutes = date.getMinutes();
minutes = minutes.toString();

if (minutes.length <= 1) {
  minutes = `0${minutes}`;
}
hours = hours.toString();
if (hours.length <= 1) {
  hours = `0${hours}`;
}

if (hours < 12) {
  minutes = `${minutes}am`;
} else {
  minutes = `${minutes}pm`;
}

const fullDate = `giveaway ends on ${day}, ${number} ${month} ${year} ${hours}:${minutes}`;
data.innerHTML = fullDate;
const countdown = () => {
  let date1 = new Date();

  const difference = date - date1;

  if (difference > 0) {
    let second = 1000;
    let minute = 1000 * 60;
    let hour = minute * 60;
    let giorni = hour * 24;

    const giorniInt = difference % giorni;
    const days = Math.floor(difference / giorni);

    const hours = Math.floor(giorniInt / hour);
    const oreInt = giorniInt % hour;
    const minutes = Math.floor(oreInt / minute);
    const minutiInt = oreInt % minute;

    const seconds = Math.floor(minutiInt / second);

    const unusual1 = [days, hours, minutes, seconds];

    function format(x) {
      if (x < 10) {
        return (x = `0${x}`);
      } else {
        return x;
      }
    }

    unusual.forEach((i, index) => {
      i.innerHTML = format(unusual1[index]);
    });
  }
  if (difference <= 0) {
    date = date.setDate(date.getDate() + 5);
  }
};
// let date1 = new Date();
// const difference = date - date1;

setInterval(countdown, 1000);
// if (difference <= 0) {
//   clearInterval(qui va l'interval di sopra);
//   dead.innerHTML = `<h1 style='color: red'>item has been sold </h1>`;
// }
