var express = require("express");
var app = express();
var path    = require("path");
app.use(express.static(__dirname + '/public'))

app.get("/:name", function(req, res){
    var name=req.params.name;
    res.send("Welcome to my first page, " + name.toUpperCase());
    

})
 app.get("/", function(req, res){
     res.sendFile(path.join(__dirname+'/index.html'));
     

 });

 app.listen(process.env.PORT, process.env.IP, function(){
   console.log("server started");  
 } );