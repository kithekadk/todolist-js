uncompletedTodos = [];
completedTodos = [];

if(window.location.pathname == '/index.html'){
window.addEventListener('load', ()=>{
    let form_container = document.querySelector('#create-new-todo');
    let togglebutton = document.querySelector('#btn-create-todo');
    let btnclose = document.querySelector('#btnclose');
    let btnsubmit = document.querySelector('#btnsubmit');
    let createtodoform = document.querySelector('#new-todo-form');
    let taskname = document.querySelector('#txttaskname');
    let description = document.querySelector('#txttaskdesc');
    let deadline = document.querySelector('#txtdeadline');

    togglebutton.addEventListener('click', ()=>{
        if(form_container.style.display == 'none'){
            form_container.style.display = "block";
        }else{
            form_container.style.display = 'none';
        }
    })

    btnclose.addEventListener('click', ()=>{
        form_container.style.display = 'none';
    })

    createtodoform.addEventListener('submit', (e)=>{
        e.preventDefault();

        let inputs = taskname.value && description.value && deadline.value;

        // console.log(taskname.value && description.value && deadline.value);
        btnsubmit.value = 'Sending...'
        if(inputs){
            btnsubmit.value = 'Sending...'
            btnsubmit.setAttribute('disabled', '');
            uncompletedTodos.push({
                title: taskname.value,
                description: description.value,
                deadline: deadline.value
            })

            console.log(uncompletedTodos);
            renderPending();

            taskname.value = ''
            description.value = ''
            deadline.value = ''
            // btnsubmit.value ='Submit';
        }
    })
    
})

function renderPending(){
    const pendingItems = document.querySelectorAll('.pendingTasklist .taskitem');

    pendingItems.forEach(el => el.remove())
    
    uncompletedTodos.forEach(({
        title,
        description,
        deadline
    }, index)=>{
        let taskTitle = document.createElement('p');
        taskTitle.className = 'task';
        taskTitle.textContent = title

        let taskDescription = document.createElement('p');
        taskDescription.className = 'description';
        taskDescription.textContent = description

        let taskDeadline = document.createElement('p');
        taskDeadline.className = 'deadline';
        taskDeadline.textContent = deadline

        let taskItem = document.createElement('div')
        taskItem.className = 'taskitem'

        taskItem.appendChild(taskTitle)
        taskItem.appendChild(taskDescription)
        taskItem.appendChild(taskDeadline)

        let pendingTasks = document.querySelector('.pendingTasklist')
        pendingTasks.appendChild(taskItem)
    })
}
}