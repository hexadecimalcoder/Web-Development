// dragElement(document.getElementById("mydiv"));
	var doc = new jsPDF();
function dragElement(elmnt, index) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementsByClassName(elmnt.class + "header")[index]) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementsByClassName(elmnt.class + "header")[index].onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
function add(){
	var template = document.getElementsByTagName("template")[0];
	var clon = template.content.cloneNode(true);
	// dragElement(clon.getElementById("mydiv"));
	document.getElementsByClassName("outer-sheet")[0].appendChild(clon);
	dragElement(document.getElementsByClassName("mydiv")[document.getElementsByClassName("mydiv").length-1], document.getElementsByClassName("mydiv").length-1);
}
function printDiv() {
	// Open a new window
	var myWindow = window.open("", "Print", 'height=650,width=900,top=100,left=150');

	// Write some text in the new window

	myWindow.document.write("<head><title>Resume<\/title><link rel=\"stylesheet\" type=\"text\/css\" href=\"style.css\"><\/head>"+document.getElementsByClassName("outer-sheet")[0].outerHTML);     
	// myWindow.print();
	// myWindow.close();
	myWindow.close();
	window.print();

}
function saveDiv() {
	console.log("<html><head><link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\"></head><body>" + document.getElementsByClassName("outer-sheet")[0].outerHTML + "</body></html>")
	 doc.fromHTML(`<html>
	 	<head>
	 		<link rel="stylesheet" type="text/css" href="style.css">
	 	</head>
	 		<body>` + 
	 		document.getElementsByClassName("outer-sheet")[0].outerHTML + 
	 		`</body>
	 	</html>`);
 doc.save('div.pdf');
}