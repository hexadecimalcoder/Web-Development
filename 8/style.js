function show(element){
	var parent= element.parentNode.parentNode;
	var nodes = parent.childNodes;
	var title = nodes[1];
	title.style.top = "0px";
	title.style.left = "10px";
	title.style.width = "auto";
	title.style.height = "auto";
	title.style.margin = "auto";
	title.style.padding = "3px 7px";
	// title.style.paddingLeft = "7px";
	// title.style.paddingRight = "7px";
	/*	padding: 3px;
	padding-left: 7px;
	padding-right: 7px;*/
	title.style.fontSize = "12px";
	title.style.backgroundColor= "#fff";
	//console.log(nodes[1].className);
}
function hide(element){
	var parent= element.parentNode.parentNode;
	var nodes = parent.childNodes;
	var title = nodes[1];
	title.style.top = "0px";
	title.style.left = "0px";
	title.style.fontSize = "22px";
	title.style.width = "95%";
	title.style.height = "40%";
	title.style.margin = "10px";
	title.style.padding = "10px 0";
	// title.style.textAlign = "center";
	title.style.backgroundColor= "transparent";
}