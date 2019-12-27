const clockContainer = document.querySelector(`.status-bar-column-clock`);
const clockTitle = clockContainer.querySelector(`span`);
function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  clockTitle.innerHTML = `${hours}:${minutes}`;
}
function init() {
  getTime();
}
init();
