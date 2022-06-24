let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");
let homeScoreCount = 0;
let guestScoreCount = 0;

function checkHighScore() {
  if (homeScoreCount > guestScoreCount) {
    homeScore.style.color = "green";
    guestScore.style.color = "red";
  } else if (guestScoreCount > homeScoreCount) {
    guestScore.style.color = "green";
    homeScore.style.color = "red";
  } else {
    homeScore.style.color = "blue";
    guestScore.style.color = "blue";
  }
}

function homeScoreAdd1() {
  homeScoreCount += 1;
  homeScore.textContent = homeScoreCount;
  checkHighScore();
}

function homeScoreAdd2() {
  homeScoreCount += 2;
  homeScore.textContent = homeScoreCount;
  checkHighScore();
}

function homeScoreAdd3() {
  homeScoreCount += 3;
  homeScore.textContent = homeScoreCount;
  checkHighScore();
}

function guestScoreAdd1() {
  guestScoreCount += 1;
  guestScore.textContent = guestScoreCount;
  checkHighScore();
}

function guestScoreAdd2() {
  guestScoreCount += 2;
  guestScore.textContent = guestScoreCount;
  checkHighScore();
}

function guestScoreAdd3() {
  guestScoreCount += 3;
  guestScore.textContent = guestScoreCount;
  checkHighScore();
}

function restart() {
  homeScoreCount = 0;
  homeScore.textContent = 0;
  guestScoreCount = 0;
  guestScore.textContent = 0;
  homeScore.style.color = "white";
  guestScore.style.color = "white";
}
