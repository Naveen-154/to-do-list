let taskId=0;
const newTask = (userInput)=>
{
  taskId++;
  return `<div class="to_do_task" id="task_${taskId}>
  <div class="task_left_part">
  <button class="check_button" id="check_${taskId}" onClick="handleCheck(${taskId})" ><i class="fa-solid fa-circle"></i></button>
  <p class="task_desc" id="input-${taskId}"> ${userInput}</p>
  </div>
  <button onClick="handleDelete(${taskId})" class="delete_button"><i class= "fa fa-trash"></i></button>
  </div>`
}

