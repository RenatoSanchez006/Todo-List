//Add new elements
document.getElementById("submitButton").addEventListener("click", function () {
	var input = document.createElement("input");
	input.type = "checkbox";
	var label = document.createElement("label");
	label.textContent = document.getElementById("newTodo").value;
	//Element for every user input
	var parentDiv = document.createElement("div");
	parentDiv.append(input);
	parentDiv.append(label);
	//Adding element and clearing box
	document.getElementById("listOfTodos").appendChild(parentDiv)
	document.getElementById("newTodo").value = '';
});

//Uncheck elements
document.getElementById("clearButton").addEventListener("click", function () {
	var elements = document.getElementById("listOfTodos").childNodes;
	for (var i = 0; i < elements.length; i++) {
		elements[i].firstChild.checked = false;
	}
});

//Check elements
document.getElementById("markAllButton").addEventListener("click", function () {
	var elements = document.getElementById("listOfTodos").childNodes;
	for (var i = 0; i < elements.length; i++) {
		elements[i].firstChild.checked = true;
	}
});

//Deleter elements
document.getElementById("deleteButton").addEventListener("click", function () {
	var elements = document.getElementById("listOfTodos");
	while (elements.firstChild) {
		elements.removeChild(elements.firstChild);
	}
});