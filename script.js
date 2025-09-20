const tasks = [
  { id: 1, text: "Buy groceries" },
  { id: 2, text: "Call the dentist" },
  { id: 3, text: "Finish the project report" },
  { id: 4, text: "Walk the dog" },
  { id: 5, text: "task flight tickets" },
  { id: 6, text: "Reply to emails" },
  { id: 7, text: "Clean the kitchen" },
  { id: 8, text: "Water the plants" },
  { id: 9, text: "Pay electricity bill" },
  { id: 10, text: "Read a chapter of a task" },
  { id: 11, text: "Prepare lunch" },
  { id: 12, text: "Schedule a meeting with team" },
  { id: 13, text: "Exercise for 30 minutes" },
  { id: 14, text: "Check the bank account" },
  { id: 15, text: "Take out the trash" },
  { id: 16, text: "Update resume" },
  { id: 17, text: "Organize desk" },
  { id: 18, text: "Wash the car" },
  { id: 19, text: "Backup laptop files" },
  { id: 20, text: "Plan weekend activities" }
];

function BldTasksDiv(arr)
{
  const genTaskDiv = document.createElement("div");
  document.body.appendChild(genTaskDiv);
  const genTaskUl = document.createElement("ul");
  genTaskDiv.appendChild(genTaskUl);
  
   arr.forEach((item,i,arr)=>{
    const genTaskLi = document.createElement("li");
    genTaskLi.id = "taskId"+item.id;
    genTaskLi.textContent = item.text;
    genTaskUl.appendChild(genTaskLi);    
    const genTaskBtn = document.createElement("button");
    genTaskBtn.innerHTML = "Del";
    genTaskBtn.id = "btnId"+item.id;
    genTaskBtn.style.margin = "5px";
    genTaskBtn.onclick = function () {  delTask(this.id); };
    genTaskLi.appendChild(genTaskBtn);    
   })
}

BldTasksDiv(tasks);

function delTask(id)
{
  const prefix = 'btnId';
  const startIndex = id.indexOf(prefix) + prefix.length;
  const numberStr = id.slice(startIndex);
    
  document.getElementById ('taskId'+numberStr)?.remove();
  const index = tasks.findIndex(task => task.id == numberStr);
  if (index > -1 )
    tasks.splice(index,1);

  if (tasks.length == 0)
    alert("All tasks completed")
}