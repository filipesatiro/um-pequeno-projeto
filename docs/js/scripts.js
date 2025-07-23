//função que adiciona tarefa
function addTask(){
    //titulo da tarefa
    const tasktitle = document.querySelector("#tasktitle").value;
    
    if(tasktitle) {
        //colana o template
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true);
        //adicionando o titulo
        newTask.querySelector(".task-title").textContent = tasktitle;

        //remover as classes desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //adicionar essa tarefa na lista
        const list = document.querySelector("#task-list");
        list.appendChild(newTask);

        //adicionar o evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
        removeTask(this);
        });

        //adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this);
        });


        //limpar testo
        document.querySelector("#tasktitle").value = "";
    }
}

//função de remover tarefa
function removeTask(task){
    task.parentNode.remove(true);
}

//função de completar tarefa
function completeTask(task){
    const taskComplete = task.parentNode;
    taskComplete.classList.toggle("done");
}

//evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){
    e.preventDefault();
    
    addTask();
});