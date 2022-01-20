const clockTitle = document.querySelector(".js-clock");
const christmasEve = new Date("Dec 24,2022,00:00:00").getTime();

function setDDay() {
  const now = new Date();
  const diff = christmasEve - now;
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHours = String(
    Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const diffMinutes = String(
    Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const diffSeconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );

  clockTitle.innerText = `${diffDays}d ${diffHours}h ${diffMinutes}m ${diffSeconds}s`;
}

setDDay();
setInterval(setDDay, 1000);
