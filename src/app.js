/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const tasks = [];

  taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      const taskText = taskInput.value.trim();
      console.log("tarea creada");
      addTask(taskText);
    }
  });

  function addTask(taskText) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `
    <span><input type="checkbox"></span>
    <span>${taskText}</span>
    <span class="taskDelete">X</span>
    `;
    taskList.appendChild(li);
    tasks.push(li);

    const deleteTask = li.querySelector(".taskDelete");
    deleteTask.addEventListener("click", function() {
      const index = tasks.indexOf(li);
      tasks.splice(index, 1);
      taskList.removeChild(li);
    });
    tasks.sort((task1, task2) =>
      task1.textContent.localeCompare(task2.textContent)
    );
    taskList.innerHTML = "";
    tasks.forEach(task => taskList.appendChild(task));
  }
};

const numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); // [1, 2, 3, 4, 5]
