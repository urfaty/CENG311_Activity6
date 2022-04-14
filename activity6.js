var time = 500;
var count = 0;
var level = 1

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
	$("gamebutton").onmouseover = myHover;
    $("gamebutton").onclick = levelcount;

};

function moveButton(){
    
    document.getElementById("gamebutton").style.marginLeft = Math.floor(Math.random()*1100)+"px";
	document.getElementById("gamebutton").style.marginTop = Math.floor(Math.random()*700)+"px";


}

function levelcount() {

    count++;

    if(count==3)
    {
        level++;
        alert ("You are the winner you can go next level "+level);
        count=0;
        time = time - 100

    }


}

function myHover() {
	setTimeout(moveButton, time);
}




