const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
  const task = inputBox.value;
  if (inputBox.value === '') {
      alert("Please enter a task");
  }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
  }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
  }
  else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.style.display = 'none';
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem('listContainer', listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem('listContainer');
}
showTask();