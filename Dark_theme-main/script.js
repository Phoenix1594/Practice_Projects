var body=document.getElementById('body');
var btn=document.getElementById('button');

button.onclick=function(){
    if(body.className=="black"){
        body.className="white";
        button.className="black";
    }else{
        body.className="black";
        button.className="white";
    }
}