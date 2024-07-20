function add(){
    const input=document.getElementById("input").value;
    if(input!="")
    {
        list(input);
    }
}

function list(input)
{
    const li = document.createElement('li');
    const todoList = document.getElementById('list');
    const tspan = document.createElement('span');
    tspan.textContent = input;
    tspan.className = 'ttext';
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', function() {
      li.remove();
    });
    li.appendChild(tspan);
    li.appendChild(deleteButton);
  
    tspan.addEventListener('click', function() {
      li.classList.toggle('completed');
    });
  
    todoList.appendChild(li);
    document.getElementById("input").value="";
}

