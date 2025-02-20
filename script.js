// DOM Variables
let daysSpan = document.querySelector(".jsDays");
let hoursSpan = document.querySelector(".jsHours");
let minutesSpan = document.querySelector(".jsMinutes");
let secondsSpan = document.querySelector(".jsSeconds");
let giveawayTitle = document.querySelector(".jsGiveawayTitle");

// End of countdown date and time
let countdownDate = new Date("Mar 2, 2030, 10:00:00").getTime();

// Runs the countdown
let timer = setInterval(() => {
  // Current date and time
  let now = new Date().getTime();

  // Distance between current time and end of countdown
  let distance = countdownDate - now;

  // Updates variables on every interval
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Inserts updated variables onto the webpage
  daysSpan.textContent = days;
  hoursSpan.textContent = hours;
  minutesSpan.textContent = minutes;
  secondsSpan.textContent = seconds;

  // If countdown ends, the countdown stops and the user is alerted
  if (distance < 0) {
    clearInterval(timer);
    giveawayTitle.textContent = "The Giveaway Has Now Ended";
    daysSpan.textContent = 0;
    hoursSpan.textContent = 0;
    minutesSpan.textContent = 0;
    secondsSpan.textContent = 0;
  }
}, 1000);
//
