var ms = 0, s = 0, m = 0;
var timer;

var stopwatchEl = document.querySelector('.stopwatch');
var lapsContainer = document.querySelector('.laps');
var startButton = document.getElementById('start');
var pauseButton = document.getElementById('pause');

function start() {
        if(!timer) {
                timer = setInterval(run, 10);
        }
}

startButton.addEventListener('click', function(){
        start();
        startButton.style.display = 'none';
        pauseButton.style.display = 'block';
})

pauseButton.addEventListener('click', function(){
        pause();
        startButton.style.display = 'block';
        pauseButton.style.display = 'none';
})

function pause() {
        stopTimer();
}

function stop() {
        stopTimer();
        ms = 0;
        s = 0;
        m = 0;
        stopwatchEl.textContent = getTimer();
}

function run() {
        stopwatchEl.textContent = getTimer();
        ms++;
        if(ms == 100) {
                ms = 0;
                s++;
        }
        if(s == 60) {
                s = 0;
                m++;
        }
}

function stopTimer() {
        clearInterval(timer);
        timer = false;
}

function getTimer() {
        return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}

function restart() {
        stop();
        start();
}

function lap() {
        if(timer) {
                var li = document.createElement('li');
                li.innerText = "Lap" + " " + getTimer();
                lapsContainer.appendChild(li);
        }
}

function resetLaps() {
        lapsContainer.innerHTML = '';
}