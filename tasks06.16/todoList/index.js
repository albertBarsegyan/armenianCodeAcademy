const todoInput = document.querySelector('#todoInput');
const listContainer = document.querySelector('#listContainer');
const clearList = document.querySelector('#clearList');
// todo edit buttons

// creating list item container
function makeListItemContainer(event) {
  // list item container
  const listItemContainer = document.createElement('li');
  listItemContainer.classList.add('todo-list__item-container');
  // list item container contents
  const todoListItem = document.createElement('div');
  todoListItem.classList.add('todo-list__item');
  const todoListSpan = document.createElement('span');
  todoListSpan.classList.add('todo-text');
  todoListSpan.innerText = event.target.value;
  todoListItem.appendChild(todoListSpan);
  listItemContainer.appendChild(todoListItem);

  // buttons container
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('todo-list__buttons');
  //   done button
  const doneButton = document.createElement('button');
  doneButton.classList.add('done-button', 'btn');
  const doneButtonIcon = document.createElement('i');
  doneButtonIcon.classList.add('fas', 'fa-check-circle');
  doneButton.appendChild(doneButtonIcon);
  // edit button
  const editButton = document.createElement('button');
  editButton.classList.add('edit-button', 'btn');
  const editButtonIcon = document.createElement('i');
  editButtonIcon.classList.add('fas', 'fa-edit');
  editButton.appendChild(editButtonIcon);
  // remove button
  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-button', 'btn');
  const removeButtonIcon = document.createElement('i');
  removeButtonIcon.classList.add('fas', 'fa-trash');
  removeButton.appendChild(removeButtonIcon);

  buttonContainer.append(doneButton, editButton, removeButton);
  listItemContainer.appendChild(buttonContainer);
  listContainer.appendChild(listItemContainer);
  console.log('done');

  removeButton.addEventListener('click', function () {
    this.parentNode.parentNode.remove();
  });
  editButton.addEventListener('click', function (e) {
    const inputSpan = this.parentNode.previousElementSibling.childNodes[0];
    let input;
    if (inputSpan.tagName === 'SPAN') {
      input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.classList.add('input--main');
      input.value = inputSpan.innerText;
      inputSpan.parentNode.replaceChild(input, inputSpan);
      console.log(inputSpan);
    } else {
      input = document.createElement('span');
      input.classList.add('todo-text');
      input.innerText = inputSpan.value;
      inputSpan.parentNode.replaceChild(input, inputSpan);
    }
  });
  doneButton.addEventListener('click', function (e) {
    const listContainer = this.parentNode.parentNode;
    const inputSpan = this.parentNode.previousElementSibling.childNodes[0];
    if (listContainer.classList.contains('border--success')) {
      listContainer.classList.remove('border--success');
      inputSpan.classList.remove('color--success');
    } else {
      listContainer.classList.add('border--success');
      inputSpan.classList.add('color--success');
    }
  });
}

// event listeners
todoInput.addEventListener('keypress', function (e) {
  if (e.keyCode === 13 && e.target.value.length > 0) {
    makeListItemContainer(e);
    e.target.value = '';
  }
});
clearList.addEventListener('click', function () {
  listContainer.innerHTML = '';
});
