let coins = 0;
let clickPower = 1;
let autoPower = 0;

const coinDisplay = document.getElementById("coins");
const clickBtn = document.getElementById("click-button");
const upgradeClick = document.getElementById("upgrade-click");
const upgradeAuto = document.getElementById("upgrade-auto");

function updateCoinsDisplay() {
  coinDisplay.textContent = coins;
}

clickBtn.addEventListener("click", () => {
  coins += clickPower;
  updateCoinsDisplay();
});

upgradeClick.addEventListener("click", () => {
  if (coins >= 50) {
    coins -= 50;
    clickPower += 1;
    updateCoinsDisplay();
  }
});

upgradeAuto.addEventListener("click", () => {
  if (coins >= 100) {
    coins -= 100;
    autoPower += 1;
    updateCoinsDisplay();
  }
});

setInterval(() => {
  coins += autoPower;
  updateCoinsDisplay();
}, 1000);
