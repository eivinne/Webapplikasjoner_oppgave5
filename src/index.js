import './styles.scss';

window.onload = start;

const todocards = [
  { title: 'Title', description: 'Description', author: 'Author' },
  { title: 'Title', description: 'Description', author: 'Author' },
  { title: 'Title', description: 'Description', author: 'Author' },
];

const finishedTodocards = [
  {
    title: 'Title',
    description: 'Description',
    author: 'Author',
    timestamp: new Date().toLocaleDateString(),
  },
  {
    title: 'Title',
    description: 'Description',
    author: 'Author',
    timestamp: new Date().toLocaleDateString(),
  },
  {
    title: 'Title',
    description: 'Description',
    author: 'Author',
    timestamp: new Date().toLocaleDateString(),
  },
];

function start() {
  const addBtn = document.getElementById('addBtn');
  const popupContainer = document.getElementById('popupContainer');
  const exitBtn = document.getElementById('exitBtn');
  const form = document.getElementById('form');

  updateCards();
  updateCompletedList();

  addBtn.onclick = () => {
    popupContainer.style.display = 'block';
  };

  exitBtn.onclick = () => {
    popupContainer.style.display = 'none';
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todoObject = {
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      author: document.getElementById('author').value,
    };

    createTodo(todoObject);
  });
}

function createTodo(todoObject) {
  todocards.unshift(todoObject);
  updateCards();
  popupContainer.style.display = 'none';
}

function completeTodo(title) {
  for (i = 0; i < todocards.length; i++) {
    if (todocards[i].title == title) {
      todoObject = todocards[i];
      todoObject.timestamp = new Date();
      finishedTodocards.unshift(todoObject);
      todocards.splice(i, 1);
    }
  }
}

function deleteCard(button) {
  /* insert solution to my troubles */
}

function updateCards() {
  const todocardContainer = document.getElementById('todocardContainerid');
  todocardContainer.innerHTML = '';

  for (let i = 0; i < 3; i++) {
    const todoObject = todocards[i];

    const htmlCard =
      `${"<section class='todocard'>" + "<h3 class='todocardHeader'> "}${
        todoObject.title
      } </h3>` +
      `<p class='todocardText'>${todoObject.description}</p>` +
      `<button class='deleteBtn'>Delete</button>` +
      `<button class='completeBtn'>Complete</button>`;
    /* "<button class='deleteBtn'  id='delete" + id + "'" + " onclick='deleteCard(this)'" + ">" + "Delete" + "</button>" +
        "<button class='completeBtn' id='complete" + id + "'" + " onclick='completeCard(this)" + "'" + ">" + "Complete" + "</button>" */

    todocardContainer.innerHTML += htmlCard;
  }
}

function updateCompletedList() {
  const completedListContainer = document.getElementById(
    'completedListContainer'
  );
  completedListContainer.innerHTML = '';

  for (let i = 0; i < 3; i++) {
    const listElement = finishedTodocards[i];

    const htmlListElement =
      `${'<li>' + '<h4>'}${listElement.title}</h4>` +
      `<h4>${listElement.author}</h4>` +
      `<h4>${listElement.description}</h4>` +
      `<h4>${listElement.timestamp}</h4>` +
      `<li>`;

    completedListContainer.innerHTML += htmlListElement;
  }
}
