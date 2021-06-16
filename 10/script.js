var h = 8, w = 15;
var total_units = h*w;
var element = "";
var random_x = 0, random_y = 0;
var interval = 10000; //transition duration
var duration = 2000;
var is_mobile;
var unit ="<div class=\"unit\"><div class=\"arm\" id=\"one\"></div><div class=\"arm\" id=\"two\"></div></div>";
element = unit.repeat(total_units);


// for (var i=1; i<=total_units; i++)
// {
// 	element += unit;
// }
//sleep(5000);
//loop();
//setInterval(loop,30000);
window.addEventListener("orientationchange", function() {
  checkorientation();
}, false);
document.getElementsByClassName("canvas-inner")[0].innerHTML = element;
document.getElementsByClassName('canvas-outer')[0].style.transitionDuration = "0.5s";
var number =-1;
//shuffle();
//shuffle();
//ENABLE THIS
setTimeout(shuffle, 0)
setTimeout(loop_time, interval+duration);

//setInterval(loop_digits,5000);

// document.onclick = function (argument) {
//     var conf = confirm("Fullscreen mode?");
//     var docelem = document.documentElement;

//     if (conf == true) {
//         if (docelem.requestFullscreen) {
//             docelem.requestFullscreen();
//         }
//         else if (docelem.mozRequestFullScreen) {
//             docelem.mozRequestFullScreen();
//         }
//         else if (docelem.webkitRequestFullScreen) {
//             docelem.webkitRequestFullScreen();
//         }
//         else if (docelem.msRequestFullscreen) {
//             docelem.msRequestFullscreen();
//         }
//     }
// }
if (screen.width < screen.height) {
	document.getElementsByClassName("overlay")[0].style.visibility = "visible";
	document.getElementsByClassName("overlay")[0].style.opacity = "1";
	is_mobile = true;
	document.getElementsByClassName("right-panel")[0].style.width = "200px";
	document.getElementById("right-panel-title").style.fontSize = "40px";
	document.getElementById("right-panel-title").style.lineHeight = "32px";
	document.getElementById("right-panel-description").style.fontSize = "16px";
	document.getElementById("right-panel-description").style.lineHeight = "16px";
	document.getElementById("right-panel-footer").style.width = "75%";
	document.getElementById("rotate").style.display = "block";
}	
// if (screen.width < screen.height) {
// 	document.getElementsByClassName("canvas-inner")[0].style.gridTemplateColumns = "repeat(8, 1fr)";
// 	document.getElementsByClassName("canvas-inner")[0].style.gridTemplateRows = "repeat(15, 1fr)";
// 	document.getElementsByClassName("canvas-outer")[0].style.height = 0.9 * screen.height;	
// 	document.getElementsByClassName("outer-shell")[0].style.paddingTop = "0%";
// 	document.getElementsByClassName("outer-shell")[0].style.width = "";
// 	document.getElementsByClassName("outer-shell")[0].style.height = "85vh";
// 	document.getElementsByClassName("canvas-outer")[0].style.paddingLeft = (8/15)*document.getElementsByClassName("canvas-outer")[0].clientHeight;
// }	

// document.getElementsByClassName('unit')[0].getElementsByClassName("arm")[0].style.transform = "translate(-50%, 0) rotate(240deg)" ;
function checkorientation(){
	if (window.orientation == 0 && is_mobile) {
		document.getElementById("rotate").style.display = "block";
	}
}
function closepopup(){
	document.getElementsByClassName("overlay")[0].style.visibility = "hidden";
	document.getElementsByClassName("overlay")[0].style.opacity = "0";
}
function rotate(){
    let docelem = document.documentElement;
    if (docelem.requestFullscreen) {
        docelem.requestFullscreen();
    }
    else if (docelem.mozRequestFullScreen) {
        docelem.mozRequestFullScreen();
    }
    else if (docelem.webkitRequestFullScreen) {
        docelem.webkitRequestFullScreen();
    }
    else if (docelem.msRequestFullscreen) {
        docelem.msRequestFullscreen();
    }
    document.getElementsByClassName("overlay")[0].style.visibility = "hidden";
	document.getElementsByClassName("overlay")[0].style.opacity = "0";
	screen.orientation.lock("landscape-primary")
	.then()
	.catch(function(error) {
		alert(error);
	});
	document.getElementsByClassName("outer-shell")[0].style.paddingTop = "52.00%";
	document.getElementsByClassName("canvas-outer")[0].style.paddingLeft = "91.4%";
	let arms = document.getElementsByClassName("arm");
	for (let i = arms.length - 1; i >= 0; i--) {
		arms[i].style.width = "3px";
		arms[i].style.transformOrigin = "50% calc(100% - 1.5px)";
	}
	document.getElementById("rotate").style.display = "none";
	// document.getElementsByClassName("arm").style.width = "3px";
	// document.getElementsByClassName("arm").style.transformOrigin = "50% calc(100% - 1.5px)";
}
function showrightpanel(){
	let xpos = document.getElementsByClassName('right-panel')[0].style.right;
	document.getElementsByClassName('canvas-outer')[0].style.transitionDuration = "0.5s";
	if(xpos == "0px"){ //Panel Open- Close that
		document.getElementsByClassName("fa-close")[0].className = "fa fa-info";
		document.getElementById("right-panel-button").style.color = "#efeeee";
		document.getElementById("right-panel-button").style.backgroundColor = "#999";
		document.getElementById("right-panel-button").style.padding = "5px 15px";
		if (is_mobile) { //mobile device
			document.getElementsByClassName('right-panel')[0].style.right = "-300px";
			document.getElementsByClassName('canvas-outer')[0].style.left = "0px";
		}
		else{
			document.getElementsByClassName('right-panel')[0].style.right = "-300px";
			document.getElementsByClassName('canvas-outer')[0].style.left = "0px";
		}
	}
	else{ //Panel Closed- Open that
		document.getElementsByClassName("fa-info")[0].className = "fa fa-close";
		document.getElementById("right-panel-button").style.color = "#999";
		document.getElementById("right-panel-button").style.backgroundColor = "#efeeee";
		document.getElementById("right-panel-button").style.padding = "5px 10px";
		if (is_mobile) { //mobile device
			document.getElementsByClassName('right-panel')[0].style.right = "0px";
			document.getElementsByClassName('canvas-outer')[0].style.left = "-100px";
		}
		else {
			document.getElementsByClassName('right-panel')[0].style.right = "0px";
			document.getElementsByClassName('canvas-outer')[0].style.left = "-150px";
		}
	}
}


function goFullscreen() {
	let elem = document.documentElement;
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} 
	else if (elem.webkitRequestFullscreen) { /* Safari */
		elem.webkitRequestFullscreen();
	} 
	else if (elem.msRequestFullscreen) { /* IE11 */
		elem.msRequestFullscreen();
	}
	document.getElementsByClassName("fa")[0].className = "fa fa-compress";
	document.getElementById("fullscreen-button").onclick = closeFullscreen;
	// document.getElementsByClassName("fa-expand").className = "fa fa-contract";
	//$(this).find($(".fa")).removeClass('fa-expand').addClass('fa-compress');
	
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
  document.getElementById("fullscreen-button").onclick = goFullscreen;
  // document.getElementsByClassName("fa fa-expand").className = "fa fa-expand";
  //$(this).find($(".fa")).removeClass('fa-compress').addClass('fa-expand');
  document.getElementsByClassName("fa")[0].className = "fa fa-expand";
}
function setDigitXY(index, posX, posY, arm1, arm2) {
	let startingPos, absoluteValue;
	if (index==1) { startingPos=16;}
	else if (index==2) { startingPos=19;}
	else if (index==3) { startingPos=23;}
	else if (index==4) { startingPos=26;}
	else return;
	absoluteValue= startingPos + posX + posY*w;
	// if (screen.width<screen.height) {
	// 	if (index==1) { startingPos=9;}
	// 	else if (index==2) { startingPos=12;}
	// 	else if (index==3) { startingPos=65;}
	// 	else if (index==4) { startingPos=68;}
	// 	else return;
	// 	absoluteValue = startingPos + posX + posY*8;
	// }
	//console.log(absoluteValue);
	document.getElementsByClassName('unit')[absoluteValue].getElementsByClassName("arm")[0].style.transform = "translate(-50%, 0) rotate("+arm1+"deg)";
	document.getElementsByClassName('unit')[absoluteValue].getElementsByClassName("arm")[1].style.transform = "translate(-50%, 0) rotate("+arm2+"deg)";
	//document.getElementsByClassName('unit')[absoluteValue].style.backgroundColor = "#f00";
	//console.log(absoluteValue);

}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
// function sleep(milliseconds) {
//   var start = new Date().getTime();
//   for (var i = 0; i < 1e7; i++) {
//     if ((new Date().getTime() - start) > milliseconds){
//       break;
//     }
//   }
// }

function loop_random() {
	let x = Math.random();
	let y = Math.random();
	for (let i=0; i< total_units; i++)
	{
		document.getElementsByClassName('unit')[i].getElementsByClassName("arm")[0].style.transform = "translate(-50%, 0) rotate("+x*360+"deg)";
		document.getElementsByClassName('unit')[i].getElementsByClassName("arm")[1].style.transform = "translate(-50%, 0) rotate("+y*360+"deg)";
	}
	// for (var i=0; i< total_units; i++)
	// {
	// 	document.getElementsByClassName('unit')[i].getElementsByClassName("arm")[0].style.transform = "translate(-50%, 0) rotate("+Math.random()*360+"deg)";
	// 	document.getElementsByClassName('unit')[i].getElementsByClassName("arm")[1].style.transform = "translate(-50%, 0) rotate("+Math.random()*360+"deg)";
	// }
}

function loop_digits() {
	//number=1;
	//console.log(number);
	number++;
	if (number>9) {number=0;}
	let angleOne, angleTwo;
	random_x = 0.625;
	random_y = 0.625;
	for ( let j = 1; j <= 4; j++) {
		for ( let y = 0; y <= 5; y++) {
			for ( let x = 0; x <= 2; x++) {
				angleOne = getAngleDigitPos(number, x, y, "arm1");
				angleTwo = getAngleDigitPos(number, x, y, "arm2");
				setDigitXY(j, x, y, angleOne, angleTwo);
			}
		}
	}
	let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 22, 29, 30, 37, 44, 45, 52, 59, 60, 67, 74, 75, 82, 89, 90, 97, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119];
	// if (screen.width<screen.height) {
	// 	list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 15, 16, 23, 24, 31, 32, 39, 40, 47, 48, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 71, 72, 79, 80, 87, 88, 95, 96, 103, 104, 111, 112, 113, 114, 115, 116, 117, 118, 119];
	// }
	for (let i = 0; i<list.length; i++)
	{
		//console.log(i);
		document.getElementsByClassName('unit')[list[i]].getElementsByClassName("arm")[0].style.transform = "translate(-50%, 0) rotate("+random_x*360+"deg)";
		document.getElementsByClassName('unit')[list[i]].getElementsByClassName("arm")[1].style.transform = "translate(-50%, 0) rotate("+random_y*360+"deg)";
	}
	setTimeout(shuffle, 3000);
	setTimeout(loop_time, 5000);
}


function loop_time() {
	let angleOne, angleTwo;
	random_x = 0.625;
	random_y = 0.625;
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let h1, h2, m1, m2;
	if (hours<10) {
		h1 = 0;
	}
	else {
		h1 = Math.floor(hours/10);
	}
	h2 = hours % 10;
	if (minutes<10) {
		m1 = 0;
	}
	else {
		m1 = Math.floor(minutes/10);
	}
	m2 = minutes % 10;
	let timeVariables = [h1, h2, m1, m2];
	//console.log(h1, h2, m1, m2);
	for ( let j = 1; j <= 4; j++) {
		for ( let y = 0; y <= 5; y++) {
			for ( let x = 0; x <= 2; x++) {
				angleOne = getAngleDigitPos(timeVariables[j-1], x, y, "arm1");
				angleTwo = getAngleDigitPos(timeVariables[j-1], x, y, "arm2");
				//console.log(i, j, x, y);
				setDigitXY(j, x, y, angleOne, angleTwo);
			}
		}
	}
	let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 22, 29, 30, 37, 44, 45, 52, 59, 60, 67, 74, 75, 82, 89, 90, 97, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119];
	// if (screen.width<screen.height) {
	// 	list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 15, 16, 23, 24, 31, 32, 39, 40, 47, 48, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 71, 72, 79, 80, 87, 88, 95, 96, 103, 104, 111, 112, 113, 114, 115, 116, 117, 118, 119];
	// }
	for (let i = 0; i<list.length; i++)
	{
		//console.log(i);
		document.getElementsByClassName('unit')[list[i]].getElementsByClassName("arm")[0].style.transform = "translate(-50%, 0) rotate("+random_x*360+"deg)";
		document.getElementsByClassName('unit')[list[i]].getElementsByClassName("arm")[1].style.transform = "translate(-50%, 0) rotate("+random_y*360+"deg)";
	}
	setTimeout(shuffle, interval+1000);
	setTimeout(loop_time, 2*(interval+1000));
}


function shuffle() {
	random_x = Math.random();
	random_y = Math.random();
	for (var i=0; i< total_units; i++)
	{
		document.getElementsByClassName('unit')[i].getElementsByClassName("arm")[0].style.transform = "translate(-50%, 0) rotate("+random_x*360+"deg)";
		document.getElementsByClassName('unit')[i].getElementsByClassName("arm")[1].style.transform = "translate(-50%, 0) rotate("+random_y*360+"deg)";
	}
}




function getAngleDigitPos(digit, posX, posY, arm) {
	let lookUpTable = 	[	
							[		//digit-0
								[
									{arm1: 90, arm2: 180}, //00
									{arm1: 90, arm2: -90},	//01
									{arm1: 180, arm2: -90},	//02
								],
								[
									{arm1: 0, arm2: 180}, //10
									{arm1: 180, arm2: 180},	//11
									{arm1: 0, arm2: 180},	//12
								],
								[
									{arm1: 0, arm2: 180}, //20
									{arm1: 0, arm2: 180},	//21
									{arm1: 0, arm2: 180},	//22
								],
								[
									{arm1: 0, arm2: 180}, //30
									{arm1: 0, arm2: 180},	//31
									{arm1: 0, arm2: 180},	//32
								],
								[
									{arm1: 0, arm2: 180}, //40
									{arm1: 0, arm2: 0},	//41
									{arm1: 0, arm2: 180},	//42
								],
								[
									{arm1: 0, arm2: 90}, //50
									{arm1: -90, arm2: 90},	//51
									{arm1: -90, arm2: 0},	//52
								],
							],
							[		//digit-1
								[
									{arm1: null, arm2: null}, //00
									{arm1: 90, arm2: 225},	//01
									{arm1: 180, arm2: -90},	//02
								],
								[
									{arm1: 90, arm2: 45}, //10
									{arm1: -90, arm2: 180},	//11
									{arm1: 0, arm2: 180},	//12
								],
								[
									{arm1: null, arm2: null}, //20
									{arm1: 0, arm2: 180},	//21
									{arm1: 0, arm2: 180},	//22
								],
								[
									{arm1: null, arm2: null}, //30
									{arm1: 0, arm2: 180},	//31
									{arm1: 0, arm2: 180},	//32
								],
								[
									{arm1: null, arm2: null}, //40
									{arm1: 0, arm2: 180},	//41
									{arm1: 0, arm2: 180},	//42
								],
								[
									{arm1: null, arm2: null}, //50
									{arm1: 0, arm2: 90},	//51
									{arm1: -90, arm2: 0},	//52
								],
							],
							[		//digit-2
								[
									{arm1: 90, arm2: 180}, //00
									{arm1: -90, arm2: 90},	//01
									{arm1: -90, arm2: 180},	//02
								],
								[
									{arm1: 0, arm2: 90}, //10
									{arm1: -90, arm2: 180},	//11
									{arm1: 0, arm2: 180},	//12
								],
								[
									{arm1: 90, arm2: 180}, //20
									{arm1: 0, arm2: -90},	//21
									{arm1: 0, arm2: 180},	//22
								],
								[
									{arm1: 0, arm2: 180}, //30
									{arm1: 90, arm2: 180},	//31
									{arm1: 0, arm2: -90},	//32
								],
								[
									{arm1: 0, arm2: 180}, //40
									{arm1: 0, arm2: 90},	//41
									{arm1: -90, arm2: 180},	//42
								],
								[
									{arm1: 0, arm2: 90}, //50
									{arm1: -90, arm2: 90},	//51
									{arm1: -90, arm2: 0},	//52
								],
							],
							[		//digit-3
								[
									{arm1: 90, arm2: 180}, //00
									{arm1: -90, arm2: 90},	//01
									{arm1: -90, arm2: 180},	//02
								],
								[
									{arm1: 0, arm2: 90}, //10
									{arm1: -90, arm2: 180},	//11
									{arm1: 0, arm2: 180},	//12
								],
								[
									{arm1: 90, arm2: 180}, //20
									{arm1: 0, arm2: -90},	//21
									{arm1: 0, arm2: 180},	//22
								],
								[
									{arm1: 0, arm2: 90}, //30
									{arm1: -90, arm2: 180},	//31
									{arm1: 0, arm2: 180},	//32
								],
								[
									{arm1: 90, arm2: 180}, //40
									{arm1: 0, arm2: -90},	//41
									{arm1: 0, arm2: 180},	//42
								],
								[
									{arm1: 0, arm2: 90}, //50
									{arm1: -90, arm2: 90},	//51
									{arm1: 0, arm2: -90},	//52
								],
							],
							[		//digit-4
								[
									{arm1: 90, arm2: 180}, //00
									{arm1: -90, arm2: 180},	//01
									{arm1: -90, arm2: 180},	//02
								],
								[
									{arm1: 0, arm2: 180}, //10
									{arm1: 0, arm2: 180},	//11
									{arm1: 0, arm2: 180},	//12
								],
								[
									{arm1: 0, arm2: 180}, //20
									{arm1: 0, arm2: 0},	//21
									{arm1: 0, arm2: 180},	//22
								],
								[
									{arm1: 0, arm2: 90}, //30
									{arm1: -90, arm2: 180},	//31
									{arm1: 0, arm2: 180},	//32
								],
								[
									{arm1: null, arm2: null}, //40
									{arm1: 0, arm2: 180},	//41
									{arm1: 0, arm2: 180},	//42
								],
								[
									{arm1: null, arm2: null}, //50
									{arm1: 0, arm2: 90},	//51
									{arm1: -90, arm2: 0},	//52
								],
							],
							[		//digit-5
								[
									{arm1: 90, arm2: 180}, //00
									{arm1: -90, arm2: 90},	//01
									{arm1: -90, arm2: 180},	//02
								],
								[
									{arm1: 0, arm2: 180}, //10
									{arm1: 90, arm2: 180},	//11
									{arm1: 0, arm2: -90},	//12
								],
								[
									{arm1: 0, arm2: 180}, //20
									{arm1: 0, arm2: 90},	//21
									{arm1: -90, arm2: 180},	//22
								],
								[
									{arm1: 0, arm2: 90}, //30
									{arm1: -90, arm2: 180},	//31
									{arm1: 0, arm2: 180},	//32
								],
								[
									{arm1: 90, arm2: 180}, //40
									{arm1: 0, arm2: -90},	//41
									{arm1: 0, arm2: 180},	//42
								],
								[
									{arm1: 90, arm2: 0}, //50
									{arm1: -90, arm2: 90},	//51
									{arm1: 0, arm2: -90},	//52
								],
							],
							[		//digit-6
								[
									{arm1: 90, arm2: 180}, //00
									{arm1: -90, arm2: 90},	//01
									{arm1: -90, arm2: 180},	//02
								],
								[
									{arm1: 0, arm2: 180}, //10
									{arm1: 90, arm2: 180},	//11
									{arm1: 0, arm2: -90},	//12
								],
								[
									{arm1: 0, arm2: 180}, //20
									{arm1: 0, arm2: 90},	//21
									{arm1: -90, arm2: 180},	//22
								],
								[
									{arm1: 0, arm2: 180}, //30
									{arm1: 180, arm2: 180},	//31
									{arm1: 0, arm2: 180},	//32
								],
								[
									{arm1: 180, arm2: 0}, //40
									{arm1: 0, arm2: 0},	//41
									{arm1: 0, arm2: 180},	//42
								],
								[
									{arm1: 90, arm2: 0}, //50
									{arm1: -90, arm2: 90},	//51
									{arm1: 0, arm2: -90},	//52
								],
							],
							[		//digit-7
								[
									{arm1: 90, arm2: 180}, //00
									{arm1: -90, arm2: 90},	//01
									{arm1: -90, arm2: 180},	//02
								],
								[
									{arm1: 0, arm2: 90}, //10
									{arm1: -90, arm2: 180},	//11
									{arm1: 0, arm2: 180},	//12
								],
								[
									{arm1: null, arm2: null}, //20
									{arm1: 0, arm2: 225},	//21
									{arm1: 0, arm2: 225},	//22
								],
								[
									{arm1: 180, arm2: 45}, //30
									{arm1: 180, arm2: 45},	//31
									{arm1: null, arm2: null},	//32
								],
								[
									{arm1: 0, arm2: 180}, //40
									{arm1: 0, arm2: 180},	//41
									{arm1: null, arm2: null},	//42
								],
								[
									{arm1: 0, arm2: 90}, //50
									{arm1: 0, arm2: -90},	//51
									{arm1: null, arm2: null},	//52
								],
							],
							[		//digit-8
								[
									{arm1: 90, arm2: 180}, //00
									{arm1: -90, arm2: 90},	//01
									{arm1: -90, arm2: 180},	//02
								],
								[
									{arm1: 0, arm2: 180}, //10
									{arm1: 180, arm2: 180},	//11
									{arm1: 0, arm2: 180},	//12
								],
								[
									{arm1: 0, arm2: 180}, //20
									{arm1: 0, arm2: 0},	//21
									{arm1: 0, arm2: 180},	//22
								],
								[
									{arm1: 0, arm2: 180}, //30
									{arm1: 180, arm2: 180},	//31
									{arm1: 0, arm2: 180},	//32
								],
								[
									{arm1: 0, arm2: 180}, //40
									{arm1: 0, arm2: 0},	//41
									{arm1: 0, arm2: 180},	//42
								],
								[
									{arm1: 0, arm2: 90}, //50
									{arm1: -90, arm2: 90},	//51
									{arm1: 0, arm2: -90},	//52
								],
							],
							[		//digit-9
								[
									{arm1: 90, arm2: 180}, //00
									{arm1: -90, arm2: 90},	//01
									{arm1: -90, arm2: 180},	//02
								],
								[
									{arm1: 0, arm2: 180}, //10
									{arm1: 180, arm2: 180},	//11
									{arm1: 0, arm2: 180},	//12
								],
								[
									{arm1: 0, arm2: 180}, //20
									{arm1: 0, arm2: 0},	//21
									{arm1: 0, arm2: 180},	//22
								],
								[
									{arm1: 0, arm2: 90}, //30
									{arm1: -90, arm2: 180},	//31
									{arm1: 0, arm2: 180},	//32
								],
								[
									{arm1: 90, arm2: 180}, //40
									{arm1: 0, arm2: -90},	//41
									{arm1: 0, arm2: 180},	//42
								],
								[
									{arm1: 90, arm2: 0}, //50
									{arm1: -90, arm2: 90},	//51
									{arm1: 0, arm2: -90},	//52
								],
							],
						];
	if (lookUpTable[digit][posY][posX][arm] != null) {
		return lookUpTable[digit][posY][posX][arm];
	}
	else {
		if (arm == "arm1") {
			return random_x*360;
		}
		else if (arm == "arm2") {
			return random_y*360;
		}
		else {
			return 0;
		}
	}
}