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
function col(){
    
    var dis = document.getElementById('colt');
  
    if(dis.style.display=="inline"){
      dis.style.display="none";
    }
    else{
        dis.style.display="inline";
    }
  }
function delhr(){
    document.getElementById('lhr').style.display="none";
    document.getElementById('showLast24Hr').checked= false;

}
function delpri(){
document.getElementById('pri').style.display="none";
}
function delcolt(){
document.getElementById('colt').style.display="none";
document.getElementById('collateralRequired').checked= false;
}
document.getElementById('tool').addEventListener('mouseover',function tool(){
    document.getElementById('tooltip').style.display="block";
    setTimeout(function() {
        document.getElementById('tooltip').style.display="none";} , 5000);   
})

function sell(){
    document.getElementById('sell').style.display="block";
    document.getElementById('buy').style.display="none";
}
function buy(){
    document.getElementById('sell').style.display="none";
    document.getElementById('buy').style.display="block";
}

