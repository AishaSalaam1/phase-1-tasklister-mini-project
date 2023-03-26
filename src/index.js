document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const createTaskForm = document.getElementById('create-task-form');
  const input = document.getElementById('new-task-description');
  const btn = document.getElementsByClassName('btn');
  createTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // your code here
    buildList(input.value);
    input.value = "";
  });
  
  const buildList = (todo) => {
    let li = document.createElement('li')
    let btn = document.createElement('button')
    btn.style.backgroundColor = 'red'
    btn.addEventListener('click', deleteHandler)
    btn.textContent = 'x'
    li.textContent = `${todo} `
    li.appendChild(btn)
    console.log(li)
    document.querySelector('#tasks').appendChild(li)
  }
  function deleteHandler(e) {
    e.target.parentNode.remove()
  }
  function sortList(e) {
    e.target.parentNode.sort()
  }
  
  
});
