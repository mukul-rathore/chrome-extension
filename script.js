const inputElement = document.getElementById("input");
var list = document.getElementById("list-group");


console.log(inputElement);

var tasks = [];

if(tasks.length === 0) {
    var listItem = <li class="list-group-item">Enter today's task...</li>
    list.appendChild(listItem)
}

const listItem = "";
inputElement.addEventListener('change', inputTask);