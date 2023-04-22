let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let editItem = null;



function inputLength() {
	return input.value.length;
}


function createListElement() {
	if (button.value != "ADD") {
		editItem.target.parentElement.parentElement.children[0].innerHTML = input.value;
		button.value = "ADD";
		input.value = "";
		return false;
	}

	let div1 = document.createElement("div");
	let div2 = document.createElement("div");
	let li = document.createElement("li");
	let editButton = document.createElement("button");
	let delButton = document.createElement("button");
	div1.classList.add("itemWrapper");
	div2.classList.add("buttonsWrapper");
	ul.appendChild(div1);
	div1.append(li, div2);
	li.appendChild(document.createTextNode(input.value));
	editButton.classList.add("editBtn", "btnSmall");
	delButton.classList.add("deleteBtn", "btnSmall");
	editButton.innerHTML = "EDIT";
	delButton.innerHTML = "DELETE";
	div2.append(editButton, delButton);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleListItem(element) {
	if (element.target.tagName === "LI") {
		element.target.classList.toggle("done");
		
	}}

function editListItem(element) {
	if (element.target.classList.contains("editBtn")) {
        input.value = element.target.parentElement.parentElement.children[0].innerHTML;
        button.value = "EDIT";
        editItem = element;
    }
}
	
function deleteListItem(element) {
	if (element.target.classList.contains("deleteBtn")) {
		element.target.parentElement.parentElement.remove();
	}
}

function modifyListItem(element) {
	toggleListItem(element);
	editListItem(element);
	deleteListItem(element);
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", modifyListItem);
