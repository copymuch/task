let button1 = document.getElementById('bttn1');
let buttons = document.querySelectorAll('button');
let content1 = document.querySelector('.content-block_1');
let content2 = document.querySelector('.content-block_2');
let text = document.getElementById('text');

content1.style.backgroundColor="red";

$(document).ready(function(){
	$(".button").click(function(){
		if ($(this).hasClass("press")){
			$(this).removeClass("press");
			$("#text").html("Два блока");
			$(".content-block_1").css("background-color","red");
			$(".content-block_2").fadeIn("fast");
		} else {
			$(this).addClass("press");
			$("#text").html("Один блок");
			$(".content-block_1").css("background-color","blue");
			$(".content-block_2").fadeOut(100);
		}
	});
});

