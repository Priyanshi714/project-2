let minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let isRunning = false;

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");
const startPauseBtn = document.getElementById("startPauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const lapsContainer = document.getElementById("laps");

function startPause() {
    if (!isRunning) {
        timer = setInterval(updateStopwatch, 10);
        startPauseBtn.textContent = "Pause";
        startPauseBtn.style.background = "#ff9f1a";
    } else {
        clearInterval(timer);
        startPauseBtn.textContent = "Start";
        startPauseBtn.style.background = "#28a745";
    }
    isRunning = !isRunning;
}

function updateStopwatch() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    updateDisplay();
}

function updateDisplay() {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
    millisecondsDisplay.textContent = String(milliseconds).padStart(2, "0");
}

function resetStopwatch() {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    isRunning = false;
    startPauseBtn.textContent = "Start";
    startPauseBtn.style.background = "#28a745";
    updateDisplay();
    lapsContainer.innerHTML = "";
}

function recordLap() {
    if (!isRunning) return;
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap: ${minutesDisplay.textContent}:${secondsDisplay.textContent}:${millisecondsDisplay.textContent}`;
    lapsContainer.prepend(lapItem);
}

startPauseBtn.addEventListener("click", startPause);
resetBtn.addEventListener("click", resetStopwatch);
lapBtn.addEventListener("click", recordLap);