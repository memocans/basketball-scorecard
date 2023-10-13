let home = 0, away = 0;
let homeEl = document.getElementById("home");
let awayEl = document.getElementById("away");

function homeOnePoint() {
    home++;
    homeEl.textContent = home;
}

function homeTwoPoints() {
    home+=2;
    homeEl.textContent = home;
}

function homeThreePoints() {
    home+=3;
    homeEl.textContent = home;
}

function awayOnePoint() {
    away++;
    awayEl.textContent = away;
}

function awayTwoPoints() {
    away+=2;
    awayEl.textContent = away;
}

function awayThreePoints() {
    away+=3;
    awayEl.textContent = away;
}