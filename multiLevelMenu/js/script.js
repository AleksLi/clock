
var addItem = document.getElementById('addItem');
var select = document.getElementById('selectText');
var menuText = document.getElementById('menuText');
var menuContent = document.getElementById('menuContent');
var sublist = document.getElementById('sublist');

var id = 1;
menuText.focus();

addItem.onclick = function(event) {
	
	var itemText;
	itemText = option = menuText.value;
	if (menuText.value == "" || menuText.value == ' ') {
		return false;
	}
	if (select.selectedOptions[0].value == 0) {
 		addNewItem(document.getElementById('list'), itemText, option) ;
	} else {
 		addSubMenu(document.getElementById("id_"+select.selectedOptions[0].value), itemText);
 	}
	menuText.focus();
	menuText.select();
	id++;
}

function addNewItem(list, itemText, option) {

	var listItem = document.createElement('li');
	listItem.id = "id_" + id;
	var span = document.createElement('span');
 	span.innerText = itemText;

	var option = document.createElement('option');
	option.innerText = itemText;
	option.value = id;

	select.appendChild(option);
	listItem.appendChild(span);
	list.appendChild(listItem);
}

function addSubMenu(position, textIn) {
	
 	var nextUl = document.createElement('ul');
	var nextLi = document.createElement('li');
	nextLi.innerText = textIn;

	if( position.nextElementSibling ) {
		position.nextElementSibling.appendChild(nextLi);
	} else {
		position.insertAdjacentElement("AfterEnd", nextUl);
		nextUl.appendChild(nextLi);
	}

}


