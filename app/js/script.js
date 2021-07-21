let button1 = document.getElementById('bttn1');
let buttons = document.querySelectorAll('button');
let content1 = document.querySelector('.content-block_1');
let content2 = document.querySelector('.content-block_2');

content1.style.backgroundColor="red";

button1.onclick = function(){
	content1.style.backgroundColor = "blue";
	content2.style.display = "none";
}
