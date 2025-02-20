let addButton = document.querySelector("#addButton1");
let removeButton = document.querySelector("#removeButton1");
let removeAllButton = document.querySelector("#removeAllButton1");
let searchbar = document.querySelector("#searchbar1");
let newListItem = document.querySelector("#list");
let deletedItemsButton = document.querySelector("#showDeletedItems");
let mainListButton = document.querySelector("#mainList");
let hiddenList = document.querySelector("#listHidden");
let hiddenListItems = document.querySelector("#listHiddenItems");
let selectedItems = document.querySelector("#selectedItems");

let count = 0;
addButton.addEventListener("click", function () {
	let newItem = document.createElement("div");
	newItem.classList.add("listItem");
	newItem.classList.add(`list-item${count}`);
	count++;
	newItem.innerText = searchbar1.value;
	newListItem.appendChild(newItem);
	let getItem = document.querySelectorAll(".listItem");
	
    for (let item of getItem) {
		item.addEventListener("click", function () {
			item.style.textDecoration = "line-through";
			item.classList.add("completed");
		});
	}
});

removeButton.addEventListener("click", function () {
	let removeItem = document.querySelectorAll(".completed");
	for (let item of removeItem) {
		item.classList.remove('completed');
		hiddenListItems.appendChild(item);
	}
});

removeAllButton.addEventListener("click", function () {
		let removeAllItem = document.querySelectorAll(".listItem");
	for (let item of removeAllItem) {
		hiddenListItems.appendChild(item);
	}
});

deletedItemsButton.addEventListener("click", function () {
	hiddenList.style.display = "flex";
	item.style.display = "none";
});

mainListButton.addEventListener("click", function () {
	hiddenList.style.display = "none";
	newListItem.style.display = "flex";
});

selectedItems.addEventListener("click", function () {
		let removeSelectedItem = document.querySelectorAll(".completed");
	for (let item of removeSelectedItem) {
		item.classList.remove('completed');
		newListItem.appendChild(item);
	}
});