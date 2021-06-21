const form = document.querySelector('#loginForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const formContent = e.target;
  const formData = new FormData(formContent);
  let values = [...formData.entries()].reduce((acc, item) => {
    acc[item[0]] = item[1];
    return acc;
  }, {});
  values = JSON.stringify(values);
  alert(values);
  console.log(values);
});
