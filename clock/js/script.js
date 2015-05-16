var numbers = document.getElementById('numbers');

var clock2;

var btnStart = document.getElementById("btnStart");
var btnStop = document.getElementById("btnStop");

var inputValue = btnStart.querySelector('input');

btnStart.querySelector('span').onclick = function() {
	clock2 = setInterval("runClock()", 1000);
	btnStart.style.display = 'none';
	btnStop.style.display = 'block';
}

btnStop.querySelector('span').onclick = function() {
	clearInterval(clock2);
	btnStop.style.display = 'none';
	btnStart.style.display = 'block';
}

function runClock() {

	runHours();
	runMinutes(); 

	var tenSec = document.getElementById("tenSec");
	var sec = document.getElementById("sec");
	var date = new Date();

	$("#sec").animate({ height: "show" }, 500);
	$("#sec").animate({ opacity: "hide" }, 400);

	if (date.getSeconds() < 10) {
		sec.innerHTML = date.getSeconds();
		if (date.getSeconds() == 9) {
			$(tenSec).animate({ opacity: "hide" }, 1000);
			$("#tenSec").animate({ height: "show" }, 1000);
		}
		tenSec.innerHTML = "0";
	} else {
		var strDate = date.getSeconds() + '';
		if (strDate[1] == 9) {
			tenSec.innerHTML = strDate[0]-1;
			$(tenSec).animate({ opacity: "hide" }, 1000);
			$("#tenSec").animate({ height: "show" }, 1000);
		}
		tenSec.innerHTML = strDate[0];
		sec.innerHTML = strDate[1];
	}
}

function runMinutes() {

	var tenMin = document.getElementById("tenMin");
	var min = document.getElementById("min");
	var newDate = new Date();

	if (newDate.getMinutes() < 10) {
		min.innerHTML = newDate.getMinutes();
		if (newDate.getSeconds() == 58) {
			$("#min").animate({ opacity: "hide" }, 1500);
			$("#min").animate({ height: "show" }, 1500);
		}
		tenMin.innerHTML = "0";
	} else {
		var strMin = newDate.getMinutes() + '';
		if (strMin[1] == 9 && newDate.getSeconds() == 58) {
			tenMin.innerHTML = strMin[0]-1;
			$("#tenMin").animate({ opacity: "hide" }, 1500);
			$("#tenMin").animate({ height: "show" }, 1500);
		}
		if (newDate.getSeconds() == 58) {
			$("#min").animate({ opacity: "hide" }, 1500);
			$("#min").animate({ height: "show" }, 1500);
		}
		tenMin.innerHTML = strMin[0];
		min.innerHTML = strMin[1];
	}
}

function runHours() {

	var tenHour = document.getElementById("tenHour");
	var hour = document.getElementById("hour");
	var newDate = new Date();

	if (newDate.getHours() < 10) {
		hour.innerHTML = newDate.getHours();
		if (newDate.getSeconds() == 58 && newDate.getMinutes() == 59) {
			$("#hour").animate({ opacity: "hide" }, 2000);
			$("#hour").animate({ height: "show" }, 2000);
		}
		tenHour.innerHTML = "0";
	} else {
		var strHour = newDate.getHours() + '';
		if (strHour[1] == 9 && newDate.getSeconds() == 58 && newDate.getMinutes() == 59) {
			tenHour.innerHTML = strHour[0]-1;
			$("#tenHour").animate({ opacity: "hide" }, 2000);
			$("#tenHour").animate({ height: "show" }, 2000);
		}
		if (newDate.getSeconds() == 58 && newDate.getMinutes() == 59) {
			$("#hour").animate({ opacity: "hide" }, 2000);
			$("#hour").animate({ height: "show" }, 2000);
		}
		tenHour.innerHTML = strHour[0];
		hour.innerHTML = strHour[1];
	}
}
