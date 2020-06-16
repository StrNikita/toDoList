var tasks = [];
var countTask = 0;
var countTaskNotComplete = 0;
var click = 0;


var ul = document.getElementById('gg');

var add = document.getElementById('enter');
var nameTask = document.getElementById('text');
var itemLeft = document.getElementById('left');


var check = document.querySelectorAll(".check");
var deleteLi = document.querySelectorAll('.delete');
var tasksLi = document.querySelectorAll('.task');


add.addEventListener('click',addTask);


function updateData() {
	deleteLi = document.querySelectorAll('.delete');
	tasksLi = document.querySelectorAll('.task');
	check = document.querySelectorAll(".check");
	itemLeft.innerHTML = countTaskNotComplete + ' items left';
}


function addTask() {
	if (nameTask.value==='') {
		nameTask.focus();
		return;
	}
	countTaskNotComplete++;
	countTask++;
	fillTask();
	nameTask.value = "";
	updateUl();
	updateData();
}

function fillTask() {
	tasks[countTask-1] = {
		name : nameTask.value,
		isDone : false,
		id : countTask,
	};
}

function deleteTask() {
	event.preventDefault();
  	click = Array.prototype.indexOf.call(deleteLi, event.target);
	var li = gg.children[click];
	gg.removeChild(li);


	updateTasks(click);


	updateData();
}

function setDone() {
	event.preventDefault();
  	click = Array.prototype.indexOf.call(check, event.target);
  	if (check[click].className==='check'){
  		check[click].classList.add("doneTask");
  		tasksLi[click].classList.add('done');
  		countTaskNotComplete--;
  		tasks[click].isDone = true;
  	}
  	else {
  		console.log("pisos");
  		check[click].classList.remove("doneTask");
  		tasksLi[click].classList.remove('done');
  		countTaskNotComplete++;
  		tasks[click].isDone = false;
  	}
  	updateData();
}



gg.addEventListener('click',function(event) {
	var action = event.target;
	console.log("Parent is " + action.parentNode.className);
	if (action.className === 'check' || action.className ==='check doneTask'){
  		setDone();
	}
	else if (action.className === 'delete') {
		deleteTask();
	}
	else {
  		return;
  	}
});



	//   event.preventDefault();
	
	//   click = Array.prototype.indexOf.call(elements, event.target);


function updateTasks(number) {
	if (tasks[number].isDone === false) {
		countTaskNotComplete--;
	}
	tasks.splice(number,1);
	countTask--;
	for (var i=number;i<tasks.length;i++){
		tasks[i].id -=1;
	}
}





function updateUl() {
	var newLi = document.createElement('li');
	var newDiv = document.createElement('div');
	var newP = document.createElement('p');
	var newDelete = document.createElement('div');
	newP.innerHTML = tasks[countTask-1].name;
	newP.classList.add('ection');
	newDiv.classList.add('check');
	newDiv.id = countTask-1;
	newLi.appendChild(newDiv);
	newLi.appendChild(newP);
	newDelete.classList.add('delete');
	newDelete.id = countTask-1;
	newLi.appendChild(newDelete);
	newLi.classList.add('task');
	ul.append(newLi);
}





///////СОРТИРОВКА\\\\\\\\

var sortArea = document.getElementById('choose');
var sort = document.querySelectorAll('.actionsButtons');


var selected = 0;
var chooseSort;
sortArea.addEventListener('click',function(event) {
 	chooseSort = event.target;
	event.preventDefault();
  	clickSortButton = Array.prototype.indexOf.call(sort, event.target);
  	if (chooseSort.className === 'actionsButtons' ||chooseSort.className === 'actionsButtons selected') {
  		sort[selected].classList.remove('selected');
  		sort[clickSortButton].classList.add('selected');
  		selected = clickSortButton;
  		showSortedList();
  	}
  	else {
  		return;
  	}
});

function showSortedList() {
	switch (selected) {
		case 0:
			for (var i=0;i<tasksLi.length;i++){
				tasksLi[i].style.display = 'block';
			}
			break;
		case 1:
			for (var i=0;i<tasksLi.length;i++){
				if (tasksLi[i].className === 'task done') {
					tasksLi[i].style.display = 'none';
				}
				else {
					tasksLi[i].style.display = 'block';
				}
			}
			break;
		case 2:
			for (var i=0;i<tasksLi.length;i++){
				if (tasksLi[i].className === 'task done') {
					tasksLi[i].style.display = 'block';
				}
				else {
					tasksLi[i].style.display = 'none';
				}
			}
	}
}










