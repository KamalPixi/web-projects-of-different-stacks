function updateTime() {
  const timeElem = document.getElementById('client-time');
  if (timeElem) {
    timeElem.textContent = new Date().toLocaleString();
  }
}

updateTime();
setInterval(updateTime, 1000);
