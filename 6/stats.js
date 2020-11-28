var xhttp = new XMLHttpRequest();
var obj, dbParam, xmlhttp, myObj, x, txt = "";
xhttp.open("GET", "index_stat.php");
xhttp.onload = function()  {
	var data = JSON.parse(xhttp.responseText);
    // document.getElementById("one").innerHTML = data.Visitors;
    // document.getElementById("two").innerHTML = data.Redirects;
    // document.getElementById("three").innerHTML = data.Links;
    // document.getElementById("four").innerHTML = data.Likes;

  //  txt += "<table border='1'>"
    // for (x in data) {
    //   //txt += "<tr><td>" + data[x][2] + "</td></tr>";
    //   txt += "<a href=\""+ data[x][0] + "\" target=\"_blank\"><div class=\"card\"><div  class=\"text\">"+ data[x][1] + "</div><div class=\"image\"><img src=\""+ data[x][2] +"\"/></div></div></a>";
    // }
    for (x in data) {
      //txt += "<tr><td>" + data[x][2] + "</td></tr>";
      txt += "<a href=\""+ data[x][0] + "\" target=\"_blank\"><div class=\"card\"><div  class=\"text\"><div class=\"title\">"+ data[x][1]+"</div>";
      if (data[x][3]!=null) {
        txt += "<div class=\"subtitle\">"+ data[x][3] +"</div>";
      }
      txt += "</div>";
      if (data[x][2]!=null) {
        txt += "<div class=\"image\"><img src=\""+ data[x][2] +"\"/></div>";
      }
      txt+= "</div></a>";

    }






    // <a href="" target="_blank">Visit W3Schools</a>
    //txt += "</table>"
    // document.getElementById("demo").innerHTML = txt;
    console.log(data);
    document.getElementById("data").innerHTML = txt;
    document.getElementById("loader").style.display = "none";

};
xhttp.send();