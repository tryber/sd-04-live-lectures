function createButton(newValue) {
  const button = document.createElement('button');
    button.appendChild(document.createTextNode('X'));
    button.type = 'button';
    button.id = `btn-${newValue}`;
    button.classList.add('button--small', 'bd--red', 'text--white');
    button.onclick = function() {
      const id = this.id.split('-')[1];

      document.getElementById(id).parentElement.remove();
      return false;
    }
  return button;
}

function createinput(newValue) {
  const input = document.createElement('input');
    input.id = newValue;
    input.value = newValue;
    input.name = 'game[]';
    input.classList.add('input--small', 'input--not-border');

  return input
}

function createListItem() {
  const li = document.createElement('li');
    li.classList.add('m--t-10');

  return li;
}

function add() {
  const inputGame = document.getElementById('inpAddGame');

  if(inputGame.value !== '') {
    const ul = document.querySelector('ul');
    const li = createListItem();
    const input = createinput(inputGame.value);
    const button = createButton(inputGame.value);

    li.appendChild(input);
    li.appendChild(button);

    ul.appendChild(li);
  }
}

function dropList(id) {
  const ele = document.getElementById(id);
  ele.parentElement.remove();
}