let timer;
let time = 0;

function startTimer() {
  timer = setInterval(() => {
    time++;
    document.getElementById("timerDisplay").textContent = time;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}
