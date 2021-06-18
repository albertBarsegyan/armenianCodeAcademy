const todoInput = document.querySelector('#todoInput');
const inputText = document.querySelector('#inputText');
// todo edit buttons

// creating list item container
function makeListItemContainer(event) {
  inputText.innerText = event.target.value;
}

// event listeners
todoInput.addEventListener('keyup', function (e) {
  if (e.target.value.length > 0) {
    makeListItemContainer(e);
  }
});
