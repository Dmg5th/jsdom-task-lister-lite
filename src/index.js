const taskForm = document.querySelector("#create-task-form")
const taskList = document.querySelector("#tasks")

taskForm.addEventListener("submit", function(e){
  e.preventDefault();
  const newTask = document.querySelector("#new-task-description").value
  const taskItem = document.createElement("li");

  taskList.innerHTML +=
    `<li> ${newTask} cool!
    <button data-action="delete">Delete</button></li>
    `
  
  // taskItem.innerText = newTask

  // taskList.appendChild(taskItem);
  
  taskForm.reset()
})

taskList.addEventListener("click", function(e){
  console.log(e.target)
  if (e.target.dataset.action === "delete"){
    e.target.parentElement.remove()
  }
})



