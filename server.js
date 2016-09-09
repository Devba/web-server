var express=require('express');
var app=express();

var PORT=3000;
var middelware=require('./middelware.js');


app.use(middelware.logger);
//app.get ('/',function(req,res){
//  res.send('Hello Express!');
//})

app.get ('/about',middelware.requireAuthentication,  function(req,res){
  res.send('About!');
})

app.get ('/SwapIdApiMatchingTesting',middelware.requireAuthentication,  function(req,res){
  res.send('{"Data":[{"Id":1,"Name":"EntityName","StringValue":"National Australia Bank Limited","DataPointDesciption":null}],"Succeeded":true,"Errors":null}');
})

app.use(express.static(__dirname + '/public'));

console.log(__dirname);

app.listen(3000,function(){
  console.log('Express derver started on port ' +PORT + '')
  
});