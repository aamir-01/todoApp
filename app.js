var list = document.getElementById("list")

function addTodo(){
    var todo = document.getElementById("todo")
    var li = document.createElement("li")
    var liText = document.createTextNode(todo.value)
    li.appendChild(liText)


    var dltbtn = document.createElement("button")
    var dlttext = document.createTextNode("DELETE")
    dltbtn.setAttribute("class","dlt")
    dltbtn.setAttribute("onclick","dltItem(this)")
    
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBtn.setAttribute("class","edit")
    editBtn.setAttribute("onclick","editItem(this)")
    
    dltbtn.appendChild(dlttext)
    editBtn.appendChild(editText)

    li.appendChild(dltbtn)
    li.appendChild(editBtn)

    list.appendChild(li)

    todo.value = "";
    console.log(li)
}

function dltItem(a){
    a.parentNode.remove()
}

function dltAll(){
    list.innerHTML = ""
}

function editItem(a){
    var value = a.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edited value", value)
    a.parentNode.firstChild.nodeValue = editValue;
}
