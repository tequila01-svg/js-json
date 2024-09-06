var myObj= {name:"Ayobami",grade:"12"};
var myJSON=JSON.stringify(myObj);//convert objects to JSON for sending data 
var newObj=JSON.parse(myJSON);//convert JSONto js object for recieving data 
document.getElementById("results").innerHTML=newObj.name;