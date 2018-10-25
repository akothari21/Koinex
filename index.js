

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
function hrs(){
    
  var dis = document.getElementById('lhr');

  if(dis.style.display=="inline"){
    dis.style.display="none";
  }
  else{
      dis.style.display="inline";
  }
}
function delhr(){
    document.getElementById('lhr').style.display="none";
  }
function delpri(){
document.getElementById('pri').style.display="none";
}
function delcolt(){
document.getElementById('colt').style.display="none";
}
document.getElementById('tool').addEventListener('mouseover',function tool(){
    document.getElementById('tooltip').style.display="block";
    setTimeout(function() {
        document.getElementById('tooltip').style.display="none";} , 5000);   
      
    
})


