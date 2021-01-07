// Getting All the DOM elemets
const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");
const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");
const btnReset = document.getElementById("btn-reset");
// variables to work with
let interval;
let tens = 0;
let seconds = 0;
// Start Function
btnStart.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(() => {
    tens++;
    if (tens < 9) appendTens.innerHTML = "0" + tens;
    if (tens > 9) appendTens.innerHTML = tens;
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "00";
    }
    if (seconds > 9) appendSeconds.innerHTML = seconds;
  }, 10);
});
// Stop Function
btnStop.addEventListener("click", () => {
  clearInterval(interval);
});
// Reset Function
btnReset.addEventListener("click", () => {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
});
