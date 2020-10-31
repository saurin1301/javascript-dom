//Examine the document object

//console.dir(document);
/*console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title = 167;

console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
//document.all[10].textContent = 'Hello';
console.log(document.forms[0]);
console.log(document.links);*/

//console.dir(document.images);

//GETELEMENTID

//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');

//console.log(headerTitle);
//headerTitle.textContent = 'Hello World';
//headerTitle.innerText = 'Good morning'; 
//console.log(headerTitle.textContent);//Text content does not gives not imp to style.
//console.log(headerTitle.innerText);//Inner text also gives importance to style.
//headerTitle.innerHTML = '<h3>Hello World</h3>';
//headerTitle.style.borderBottom = 'solid 10px black';
//header.style.borderBottom = 'solid 5px red'; 


// GETELEMENTSBYCLASSNAME //

/*
var items = document.getElementsByClassName('list-group-item');

console.log(items);
console.log(items[2]);
items[0].textContent = 'Hello 1 number';
items[1].style.backgroundColor = 'yellow';
items[2].style.fontWeight = 'bold';


for(var i = 0; i < items.length; i++){
	items[i].style.backgroundColor ='#f4f4f4';
}



//GETELEMENTBYTAGNAME//

/*

var li = document.getElementsByTagName('li');

console.log(li);
console.log(li[2]);
li[0].textContent = 'Hello 1 number';
li[1].style.backgroundColor = 'yellow';
li[2].style.fontWeight = 'bold';


for(var i = 0; i < li.length; i++){
	li[i].style.backgroundColor ='#f4f4f4';
}
*/

//Query Selector  

/*

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 20px red';

var inputVar = document.querySelector('input');
inputVar.value = 'Hello world';


var submit = document.querySelector('input[type = "submit"]');
submit.value = "SEND";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var item = document.querySelector('.list-group-item:last-child');
item.style.color = 'green';

var item = document.querySelector('.list-group-item:nth-child(2)');
item.style.color = 'coral';

*/

//QuerySelectorAll

/*var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even');

for (var i = 0; i < odd.length; i++){
	odd[i].style.backgroundColor = '#f4f4f4';
	even[i].style.backgroundColor = '#ccc';
}*/

// Traversing the node

var itemList = document.querySelector('#items');

//ParentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode.parentNode);



/* ParentElement

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);
*/

//childNodes

//console.log(itemList.childNodes);

/*console.log(itemList.children);
console.log(itemList.children[2]);
itemList.children[2].style.backgroundColor = 'green';
*/

//FirstChild

//console.log(itemList.firstChild);
//firstElementChild
// console.log(itemList.firstElementChild);

//lastChild

// console.log(itemList.lastChild);
// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
// console.log(itemList.nextSibling);
//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
//previousElementSibiling
//  console.log(itemList.previousElementSibling);
//  itemList.previousElementSibling.textContent = 'Next list';

//createElement

// var newDiv = document.createElement('div');

// //Add Class
// newDiv.className = 'hello';

// //Add id
// newDiv.id = 'hello 12';

// //Add attr
// newDiv.setAttribute('title','World');

// //Crate text node
// var newDivText = document.createTextNode('Hello world');

// //Add text to div
// newDiv.appendChild(newDivText);


// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv,h1);

// console.log(newDiv);

//var button  = document.getElementById('button').addEventListener('click',buttonClick);

//function buttonClick(e){
	// console.log('button clicked');
	// document.getElementById('header-title').textContent = 'Changed';
	// document.querySelector('#main').style.backgroundColor = 'yellow';

	//console.log(e);

	// console.log(e.target);
	// console.log(e.target.id);
	// console.log(e.target.className);
	// console.log(e.target.classList);
	// var output = document.getElementById('output');
	// output.innerHTML = '<h3>'+ e.target.id + '</h3>';

	//console.log(e.type);
	//console.log(e.clientX);
	//console.log(e.clientY);

	//console.log(e.offsetX);
	//console.log(e.offsetY);

	//console.log(e.altKey);
	//console.log(e.ctrlKey);
	//console.log(e.shiftKey);
	
//}

var button  = document.getElementById('button');
var box = document.getElementById('box');

// button.addEventListener('click',runEvent);
// //button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);

//box.addEventListener('mouseenter',runEvent);
//box.addEventListener('mouseleave',runEvent);

//box.addEventListener('mouseover',runEvent);
//box.addEventListener('mouseout',runEvent);

//box.addEventListener('mousemove',runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown',runEvent);
// //itemInput.addEventListener('keyup',runEvent);
// itemInput.addEventListener('keypress',runEvent);

// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);

// itemInput.addEventListener('cut',runEvent);
// itemInput.addEventListener('paste',runEvent);

// itemInput.addEventListener('input',runEvent);

// select.addEventListener('change',runEvent);
// select.addEventListener('input',runEvent);

form.addEventListener('submit',runEvent);


function runEvent(e){
	e.preventDefault();
	console.log('Event Type:'+e.type);


	//console.log(e.target.value);
	//console.log(e.target);
	// console.log(e.target.value);
	// document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
	// output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: '+ e.offsetY +'</h3>';
	// document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";


}