const pageRegion = document.querySelector('#pageRegion');
pageRegion.addEventListener('mousemove', function (e) {
  const xPos = e.clientX;
  const yPos = e.clientY;
  const makeRound = document.createElement('div');
  makeRound.classList.add('round');
  makeRound.style.left = `${xPos}px`;
  makeRound.style.top = `${yPos}px`;
  setTimeout(() => {
    pageRegion.appendChild(makeRound);
  }, 100);
});
pageRegion.addEventListener('click', function (e) {
  const xPos = e.clientX;
  const yPos = e.clientY;
  const makeRound = document.createElement('div');
  makeRound.classList.add('round--click');
  makeRound.style.left = `${xPos}px`;
  makeRound.style.top = `${yPos}px`;
  setTimeout(() => {
    pageRegion.appendChild(makeRound);
  }, 100);
});
pageRegion.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  const xPos = e.clientX;
  const yPos = e.clientY;
  const makeRound = document.createElement('div');
  makeRound.classList.add('round--right-click');
  makeRound.style.left = `${xPos}px`;
  makeRound.style.top = `${yPos}px`;
  setTimeout(() => {
    pageRegion.appendChild(makeRound);
  }, 100);
});
