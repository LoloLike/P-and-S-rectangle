document.querySelector('.S').onclick = function(){
	let num1 = document.querySelector(".num1").value;
	let num2 = document.querySelector(".num2").value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	alert('S = ' + num1 * num2)
};

document.querySelector('.P').onclick = function(){
	let num1 = document.querySelector(".num1").value;
	let num2 = document.querySelector(".num2").value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	alert('P = ' + (num1 + num2) * 2)
};