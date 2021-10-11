var toDoInput = document.querySelector('input');
var ulList = document.querySelector('.todo__list');
var InputBtn = document.querySelector('.input__btn');

InputBtn.addEventListener('click', (event) => {
  event.preventDefault();
  // Create new elements in DOM
  var newList = document.createElement('li');
  var liText = document.createElement('div');
  var listBtn = document.createElement('BUTTON');
  var label = document.createElement('label');
  var check = document.createElement('input');
  var checkmark = document.createElement('span');
  check.setAttribute('type', 'checkbox');
  // Add new class to button in li
  listBtn.classList.add('list__btn');
  listBtn.innerHTML = 'Delete';
  newList.classList.add('list__element');
  liText.classList.add('todo__text');
  label.classList.add('checkbox__container');
  check.classList.add('todo__checkbox');
  checkmark.classList.add('checkmark');
  // Insert new task from input in new li.
  liText.innerHTML = toDoInput.value;
  // Insert new li in DOM tree and add delete button with radio check.
  ulList.appendChild(newList);
  newList.appendChild(label);
  label.appendChild(check);
  label.appendChild(checkmark);
  newList.appendChild(liText);
  newList.appendChild(listBtn);
  // Add eventlistener to delete button
  listBtn.addEventListener('click', () => {
    newList.remove();
  })
  // line-through task if check checked
  var Checked = document.querySelectorAll('.todo__checkbox');
  Checked.forEach((item) => {
    item.addEventListener('change', () => {
      if (item.checked == true) {
        item.parentNode.nextSibling.style.textDecoration = 'line-through';
        item.parentNode.nextSibling.style.opacity = '0.5';
      } else {
        item.parentNode.nextSibling.style.textDecoration = 'none';
        item.parentNode.nextSibling.style.opacity = '1';
      }
    })
  })
});