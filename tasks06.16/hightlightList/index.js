const listContainer = document.querySelector('#listContainer');
const listItem = document.querySelectorAll('.todo-list__item-container');
// listContainer.addEventListener('click', (e) => {});
console.log(listItem);
listItem.forEach((item, index, collection) => {
  item.addEventListener('click', (e) => {
    if (!collection[index - 1]) {
      item.classList.toggle('input--success');
      // collection.forEach((item) => item.classList.remove('input--success'));
    }
    if (
      collection[index - 1] &&
      collection[index - 1].classList.contains('input--success')
    ) {
      item.classList.toggle('input--success');
    }
  });
});
