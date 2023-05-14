// getting all the elements
const inputField = document.querySelector(".input-field textarea"),
todoLists = document.querySelector(".todoLists"),
pendingNum = document.querySelector(".pending-num"),
clearButton = document.querySelector(".clear-button");

// we will call this function while adding,deleting and checking-unchecking the task
function allTasks(){
    let tasks = document.querySelector(".pending");
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;
    let allLists = document.querySelectorAll(".list");
    if(allLists.length > 0){
        todoLists.style.marginTop = "20px";
        clearButton.style.pointerEvents = "auto";
        return;
    };
    todoLists.style.marginTop = "0px";
    clearButton.style.pointerEvents = "none";
};

// add text will we put value in textarea and press enter
inputField.addEventListener("keyup" , (e)=>{
    let inputVal = inputField.value.trim();

    // if enter button is clicked and inputed value length is greater than 0
    if(e.key === "Enter" && inputVal.length>0){
        let liTag = `<li class = 'list pending' onclick = "handleStatus(this)">
        <input type = "checkbox" />
        <span class = "task">${inputVal}</span>
        <i class = "uil uil-trash" onclick = "deleteTask(this)"></i>
        </li>`;
        todoLists.insertAdjacentHTML("beforeend", liTag); // inserting li tags inside the todolist div
        inputField.value = ""; // removing value from input field
        allTasks();
    };
});

// checking and unchecking the checkbox while we click on the task
function handleStatus(e) {
    const checkbox = e.querySelector("input"); // getting checkbox
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}

// deleting task while we click on the delete button
function deleteTask(e){
    e.parentElement.remove();  // getting parent element and remove it
    allTasks();
}

// deleting all the tasks while we click on the clear button
clearButton.addEventListener("click" ,()=>{
    todoLists.innerHTML="";
    allTasks();
});