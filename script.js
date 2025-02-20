// DOM Variables
let giveawayTitle = document.querySelector(".jsGiveawayTitle");
let counts = document.querySelectorAll(".jsCount");

// End of countdown date and time
let countdownDate = new Date("2 Mar, 2030, 10:00:00").getTime();

// Runs the countdown
let timer = setInterval(() => {
  // Current date and time
  let now = new Date().getTime();

  // Distance between current time and end of countdown
  let distance = countdownDate - now;

  // Updates variables depending on distance between current time and countdown end
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Time values
  let values = [days, hours, minutes, seconds];

  // Inserts updated variables onto the webpage
  for (let i = 0; i < values.length; i++) {
    values[i] < 10
      ? (counts[i].textContent = `0${values[i]}`)
      : (counts[i].textContent = values[i]);
  }

  // If countdown ends, the countdown stops and the user is alerted
  if (distance < 0) {
    clearInterval(timer);
    giveawayTitle.textContent = "This Giveaway Has Now Ended";
    counts.item(0).textContent = 0;
    counts.item(1).textContent = 0;
    counts.item(2).textContent = 0;
    counts.item(3).textContent = 0;
  }
}, 1000);
//
