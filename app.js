const timeLeft = document.getElementById("time-left");
const birthday = new Date("08/06/2022");

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timerId;

function countDown() {
  const today = new Date();
  const timeSpan = birthday - today;

  console.log(timeSpan);

  if (timeSpan <= -day) {
    timeLeft.innerHTML = "HAPPY 1 YEAR ANNIVERSARY MY LOVELY WIFE!!!";
    clearInterval(timerId);
    return;
  }

  if (timeSpan <= 0) {
    timeLeft.innerHTML =
      "IT HAS BEEN 31536000 SECONDS, 525600 MINUTES, 8760 HOURS, 365 DAYS, 52 WEEKS, 12 MONTHS, AND 1 YEAR SINCE OUR WEDDING, AND I WANT TO SAY THAT I LOVE YOU MORE AND MORE EVERY SECOND, EVERY MINUTE, EVERY HOUR, EVERY DAY, EVERY WEEK, EVERY MONTH, AND EVERY YEAR SINCE THE FIRST DAY AND TODAY IS NOT AN EXCEPTION. HAPPY 1 YEAR ANNIVERSARY MY LOVELY WIFE. I LOVE YOU VERY MUCH AND I MISS YOU VERY MUCH!!! PIKACHU🐱 + RACCOON🦝 = PIKACOON♥️";
    clearInterval(timerId);
    return;
  }

  const days = Math.floor(timeSpan / day);
  const hours = Math.floor((timeSpan % day) / hour);
  const minutes = Math.floor((timeSpan % hour) / minute);
  const seconds = Math.floor((timeSpan % minute) / second);

  timeLeft.innerHTML =
    days +
    " DAYS " +
    hours +
    " HOURS " +
    minutes +
    " MINUTES " +
    seconds +
    " SECONDS ";
}

timerId = setInterval(countDown, second);
