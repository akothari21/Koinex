

$("#menu a").click(function(){
    var selText = $(this).text();
    document.getElementById('sortselect').innerHTML=selText;
    
  });

  function myFunction() {
    var x = document.getElementById("res");
    if (x.className === "resnav") {
        x.className += " responsive";
    } else {
        x.className = "resnav";
    }
}