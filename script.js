const task = document.getElementById("task");
const cont = document.getElementById("listcont");

function addTask(){
    if (task.value===""){
        alert("You must write something in the box");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=task.value;
        cont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    task.value="";
}

cont.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data", cont.innerHTML);
}

function showDaata(){
    cont.innerHTML=localStorage.getItem("data");
}

showDaata();