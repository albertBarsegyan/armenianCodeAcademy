const timeButton = document.querySelector('#timeButton');
const timeContainer = document.querySelector('#timePlace');
const timeCont = document.querySelector('#timeContainer');
timeButton.addEventListener('click', function () {
  timeCont.style.display = 'block';
  setTimeout(() => {
    timeCont.style.opacity = 1;
  }, 100);
  showTime();
});
function showTime() {
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  let session = 'AM';
  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = 'PM';
  }
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  let time = h + ':' + m + ':' + s + ' ' + session;

  timeContainer.innerText = time;
  setTimeout(showTime, 1000);
}
