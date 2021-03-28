var h = 8, w = 15;
var total_units = h*w;
var element = "";
var unit ="<div class=\"unit\"><div class=\"arm\" id=\"one\"></div><div class=\"arm\" id=\"two\"></div></div>";
element = unit.repeat(total_units);
// for (var i=1; i<=total_units; i++)
// {
// 	element += unit;
// }
sleep(1000);
//loop();
//setInterval(loop,30000);
document.getElementsByClassName("canvas-inner")[0].innerHTML = element;
var number =-1;
setInterval(loop,3000);
// document.getElementsByClassName('unit')[0].getElementsByClassName("arm")[0].style.transform = "translate(-50%, 0) rotate(240deg)" ;
// setInterval(setRandomValue,2000);
// function setRandomValue() {
// 	var x = Math.random();
// 	var y = Math.random();
// 	for (var i=0; i< total_units; i++)
// 	{
// 		document.getElementsByClassName('unit')[i].getElementsByClassName("arm")[0].style.transform = "translate(-50%, 0) rotate("+x*360+"deg)";
// 		document.getElementsByClassName('unit')[i].getElementsByClassName("arm")[1].style.transform = "translate(-50%, 0) rotate("+y*360+"deg)";
// 	}
// 	// for (var i=0; i< total_units; i++)
// 	// {
// 	// 	document.getElementsByClassName('unit')[i].getElementsByClassName("arm")[0].style.transform = "translate(-50%, 0) rotate("+Math.random()*360+"deg)";
// 	// 	document.getElementsByClassName('unit')[i].getElementsByClassName("arm")[1].style.transform = "translate(-50%, 0) rotate("+Math.random()*360+"deg)";
// 	// }	
// }

function setDigitXY(index, posX, posY, arm1, arm2) {
	var startingPos, absoluteValue;
	if (index==1) { startingPos=16;}
	else if (index==2) { startingPos=19;}
	else if (index==3) { startingPos=23;}
	else if (index==4) { startingPos=26;}
	else return;
	absoluteValue= startingPos + posX + posY*w;
	//console.log(absoluteValue);
	document.getElementsByClassName('unit')[absoluteValue].getElementsByClassName("arm")[0].style.transform = "translate(-50%, 0) rotate("+arm1+"deg)";
	document.getElementsByClassName('unit')[absoluteValue].getElementsByClassName("arm")[1].style.transform = "translate(-50%, 0) rotate("+arm2+"deg)";
	//document.getElementsByClassName('unit')[absoluteValue].style.backgroundColor = "#f00";
	//console.log(absoluteValue);

}

// function sleep(ms) {
// 	return new Promise(resolve => setTimeout(resolve, ms));
// }
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function loop() {
	//number=5;
	console.log(number++);
	if (number>9) {number=0;}
	var angleOne, angleTwo;
	// angleOne = getAngleDigitPos(0, 0, 0, "arm1");
	// angleTwo = getAngleDigitPos(0, 0, 0, "arm2");
	// console.log(0, 1, 0, 0);
	// setDigitXY(1, 0, 0, angleOne, angleTwo);
	// console.log(angleOne, angleTwo);
	for ( var j = 1; j <= 4; j++) {
		for ( var y = 0; y <= 5; y++) {
			for ( var x = 0; x <= 2; x++) {
				angleOne = getAngleDigitPos(number, x, y, "arm1");
				angleTwo = getAngleDigitPos(number, x, y, "arm2");
				//console.log(i, j, x, y);
				setDigitXY(j, x, y, angleOne, angleTwo);
			}
		}
	}
	// for (var i = 0; i <= 0; i++)  {
	// 	for ( var j = 1; j <= 4; j++) {
	// 		for ( var y = 0; y <= 5; y++) {
	// 			for ( var x = 0; x <= 2; x++) {
	// 				angleOne = getAngleDigitPos(i, x, y, "arm1");
	// 				angleTwo = getAngleDigitPos(i, x, y, "arm2");
	// 				//console.log(i, j, x, y);
	// 				setDigitXY(j, x, y, angleOne, angleTwo);
	// 			}
	// 		}
	// 	}
	// //sleep(3000);
	// }
}






function getAngleDigitPos(digit, posX, posY, arm) {
	var lookUpTable = 	[	
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
									{arm1: 225, arm2: 225}, //00
									{arm1: 90, arm2: 225},	//01
									{arm1: 180, arm2: -90},	//02
								],
								[
									{arm1: 90, arm2: 45}, //10
									{arm1: -90, arm2: 180},	//11
									{arm1: 0, arm2: 180},	//12
								],
								[
									{arm1: 225, arm2: 225}, //20
									{arm1: 0, arm2: 180},	//21
									{arm1: 0, arm2: 180},	//22
								],
								[
									{arm1: 225, arm2: 225}, //30
									{arm1: 0, arm2: 180},	//31
									{arm1: 0, arm2: 180},	//32
								],
								[
									{arm1: 225, arm2: 225}, //40
									{arm1: 0, arm2: 180},	//41
									{arm1: 0, arm2: 180},	//42
								],
								[
									{arm1: 225, arm2: 225}, //50
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
									{arm1: 225, arm2: 225}, //40
									{arm1: 0, arm2: 180},	//41
									{arm1: 0, arm2: 180},	//42
								],
								[
									{arm1: 225, arm2: 225}, //50
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
									{arm1: 0, arm2: 0}, //00
									{arm1: 0, arm2: 0},	//01
									{arm1: 0, arm2: 0},	//02
								],
								[
									{arm1: 0, arm2: 0}, //10
									{arm1: 0, arm2: 0},	//11
									{arm1: 0, arm2: 0},	//12
								],
								[
									{arm1: 0, arm2: 0}, //20
									{arm1: 0, arm2: 0},	//21
									{arm1: 0, arm2: 0},	//22
								],
								[
									{arm1: 0, arm2: 0}, //30
									{arm1: 0, arm2: 0},	//31
									{arm1: 0, arm2: 0},	//32
								],
								[
									{arm1: 0, arm2: 0}, //40
									{arm1: 0, arm2: 0},	//41
									{arm1: 0, arm2: 0},	//42
								],
								[
									{arm1: 0, arm2: 0}, //50
									{arm1: 0, arm2: 0},	//51
									{arm1: 0, arm2: 0},	//52
								],
							],
							[		//digit-7
								[
									{arm1: 0, arm2: 0}, //00
									{arm1: 0, arm2: 0},	//01
									{arm1: 0, arm2: 0},	//02
								],
								[
									{arm1: 0, arm2: 0}, //10
									{arm1: 0, arm2: 0},	//11
									{arm1: 0, arm2: 0},	//12
								],
								[
									{arm1: 0, arm2: 0}, //20
									{arm1: 0, arm2: 0},	//21
									{arm1: 0, arm2: 0},	//22
								],
								[
									{arm1: 0, arm2: 0}, //30
									{arm1: 0, arm2: 0},	//31
									{arm1: 0, arm2: 0},	//32
								],
								[
									{arm1: 0, arm2: 0}, //40
									{arm1: 0, arm2: 0},	//41
									{arm1: 0, arm2: 0},	//42
								],
								[
									{arm1: 0, arm2: 0}, //50
									{arm1: 0, arm2: 0},	//51
									{arm1: 0, arm2: 0},	//52
								],
							],
							[		//digit-8
								[
									{arm1: 0, arm2: 0}, //00
									{arm1: 0, arm2: 0},	//01
									{arm1: 0, arm2: 0},	//02
								],
								[
									{arm1: 0, arm2: 0}, //10
									{arm1: 0, arm2: 0},	//11
									{arm1: 0, arm2: 0},	//12
								],
								[
									{arm1: 0, arm2: 0}, //20
									{arm1: 0, arm2: 0},	//21
									{arm1: 0, arm2: 0},	//22
								],
								[
									{arm1: 0, arm2: 0}, //30
									{arm1: 0, arm2: 0},	//31
									{arm1: 0, arm2: 0},	//32
								],
								[
									{arm1: 0, arm2: 0}, //40
									{arm1: 0, arm2: 0},	//41
									{arm1: 0, arm2: 0},	//42
								],
								[
									{arm1: 0, arm2: 0}, //50
									{arm1: 0, arm2: 0},	//51
									{arm1: 0, arm2: 0},	//52
								],
							],
							[		//digit-9
								[
									{arm1: 0, arm2: 0}, //00
									{arm1: 0, arm2: 0},	//01
									{arm1: 0, arm2: 0},	//02
								],
								[
									{arm1: 0, arm2: 0}, //10
									{arm1: 0, arm2: 0},	//11
									{arm1: 0, arm2: 0},	//12
								],
								[
									{arm1: 0, arm2: 0}, //20
									{arm1: 0, arm2: 0},	//21
									{arm1: 0, arm2: 0},	//22
								],
								[
									{arm1: 0, arm2: 0}, //30
									{arm1: 0, arm2: 0},	//31
									{arm1: 0, arm2: 0},	//32
								],
								[
									{arm1: 0, arm2: 0}, //40
									{arm1: 0, arm2: 0},	//41
									{arm1: 0, arm2: 0},	//42
								],
								[
									{arm1: 0, arm2: 0}, //50
									{arm1: 0, arm2: 0},	//51
									{arm1: 0, arm2: 0},	//52
								],
							],
						];
	return lookUpTable[digit][posY][posX][arm];
}