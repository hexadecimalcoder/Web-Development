var total_units = 120;
var element = "";
var unit ="<div class=\"unit\"><div class=\"arm\" id=\"one\"></div><div class=\"arm\" id=\"two\"></div></div>";
element = unit.repeat(total_units);
// for (var i=1; i<=total_units; i++)
// {
// 	element += unit;
// }
document.getElementsByClassName("canvas-inner")[0].innerHTML = element;
// document.getElementsByClassName('unit')[0].getElementsByClassName("arm")[0].style.transform = "translate(-50%, 0) rotate(240deg)" ;
setInterval(setRandomValue,2000);
function setRandomValue(argument) {
	var x = Math.random();
	var y = Math.random();
	for (var i=0; i< total_units; i++)
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