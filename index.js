const clockContainer = document.querySelector(`.status-bar-column-clock`);
const clockTitle = clockContainer.querySelector(`span`);
function addZero(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = addZero(date.getMinutes());

  clockTitle.innerHTML = `${hours}:${minutes}`;
}
function init() {
  getTime();
}
init();
