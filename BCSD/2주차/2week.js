const btn = document.getElementById("btn");

const change = () => {
    const text = document.getElementById('input');

    const TodoList = document.createElement("div");
    document.body.appendChild(TodoList)

    const Todo = document.createElement('li');
    if(text.value != ""){
        Todo.innerText = text.value;
        TodoList.appendChild(Todo)
    
        const TodoRemove = document.createElement('button');
        TodoRemove.innerText = "삭제";
        TodoList.appendChild(TodoRemove)
        TodoRemove.setAttribute("class", "removeButton")
        TodoRemove.addEventListener('click', () => {
            TodoList.remove(Todo)
        }
        )
        
        const TodoEnd = document.createElement('button');
        TodoEnd.innerText = "완료";
        TodoList.appendChild(TodoEnd)
        TodoEnd.setAttribute("class", "endButton")
        TodoEnd.addEventListener('click', () => {
            TodoList.removeChild(TodoRemove)
            TodoList.removeChild(TodoEnd)
            Todo.setAttribute("class", "endTodo")
        }
        )
        text.value = "";
    }
}   

btn.addEventListener("click", change);
