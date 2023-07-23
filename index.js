const minutesT = document.querySelector("#minutes");
const secondsT = document.querySelector("#seconds");
const milisecondsT = document.querySelector("#miliseconds");
const startbtn = document.querySelector("#start");
const pausebtn = document.querySelector("#pause");
const resetbtn = document.querySelector("#reset");
const resumebtn = document.querySelector("#resume");

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;

startbtn.addEventListener("click", startTime);
pausebtn.addEventListener("click", pauseTimer);
resumebtn.addEventListener("click", resumeTimer);
resetbtn.addEventListener("click", resetTimer);

function startTime() {
  interval = setInterval(() => {
    if (!isPaused) {
      miliseconds += 10;

      if (miliseconds == 1000) {
        seconds++;
        miliseconds = 0;
      }
      if (seconds == 60) {
        minutes++;
        seconds = 0;
      }
      minutesT.textContent = formatTime(minutes);
      secondsT.textContent = formatTime(seconds);
      milisecondsT.textContent = formatMiliseconds(miliseconds);
    }
  }, 10);
  startbtn.style.display = "none";
  pausebtn.style.display = "block";
}

function formatTime(time) {
  if (time < 10) {
    return `0${time}`;
  } else {
    return time;
  }
}

function pauseTimer() {
  isPaused = true;
  clearInterval(interval); 
  pausebtn.style.display = "none";
  resumebtn.style.display = "block";
}

function resumeTimer() {
  isPaused = false;
  interval = setInterval(() => { 
    if (!isPaused) {
      miliseconds += 10;

      if (miliseconds == 1000) {
        seconds++;
        miliseconds = 0;
      }
      if (seconds == 60) {
        minutes++;
        seconds = 0;
      }
      minutesT.textContent = formatTime(minutes);
      secondsT.textContent = formatTime(seconds);
      milisecondsT.textContent = formatMiliseconds(miliseconds);
    }
  }, 10);
  resumebtn.style.display = "none";
  pausebtn.style.display = "block";
}

function resetTimer() {
  clearInterval(interval);
  isPaused = false;
  minutes = 0;
  seconds = 0;
  miliseconds = 0;

  minutesT.textContent = "00";
  secondsT.textContent = "00";
  milisecondsT.textContent = "000";

  startbtn.style.display = "block";
  pausebtn.style.display = "none";
  resumebtn.style.display = "none";
}

function formatMiliseconds(time) {
  if (time < 100) {
    return `${time}`.padStart(3, "0");
  } else {
    return time;
  }
}
