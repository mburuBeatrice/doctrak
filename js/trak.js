function loadDoc() {
  var unumber = parseInt($("#serial").val());
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var fer = JSON.parse(this.responseText);
   if (fer.id !== "undefined") {
    document.getElementById("submitForm").innerHTML = "<div class=\"black\">Name: " +fer.name
   + "<br>Email: " + fer.email
   + "<br>Found By: " + fer.website
   + "<br>Identity Code: " + fer.id+"</div>";
    } else {
      document.getElementById("submitForm").innerHTML = "Not found";
    }
  }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users/"+unumber, true);
  xhttp.send();
}
