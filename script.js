let period = 1000;
let countdown = 30;

const colors = ["Red", "Green", "Violet"];
const username = localStorage.getItem('user');
document.getElementById('username').innerText = username || 'Guest';

function startPrediction() {
  const prediction = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById('prediction').innerText = prediction;
  console.log("Prediction for period " + period + ": " + prediction);
}

function updateCountdown() {
  countdown--;
  document.getElementById("countdown").innerText = countdown;

  if (countdown <= 0) {
    period++;
    document.getElementById("period").innerText = period;
    countdown = 30;
    startPrediction();
  }
}

startPrediction();
setInterval(updateCountdown, 1000);
