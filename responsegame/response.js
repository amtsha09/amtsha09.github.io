
var usertime = document.getElementById("selectTime").value;
var playStart = new Date();
var start = new Date().getTime();
var hits = 0;

function play(){
    hits = 0;
    playStart = new Date().getTime();
    appearAfterdelay();
}

function appearAfterdelay(){
    document.getElementById("shape").style.display = "none";
    setTimeout(appear,300);
}


function randomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function appear(){
    var shape = Math.random();
    var randomSize = (Math.floor(Math.random()*100))+30;
    var randomPosX = (Math.floor(Math.random()*500));
    var randomPosY = (Math.floor(Math.random()*500));

    if (shape < 0.5){
        document.getElementById("shape").style.borderRadius = "50%";
    }else{
        document.getElementById("shape").style.borderRadius = "0%";
    }
    
    document.getElementById("shape").style.width = randomSize;
    document.getElementById("shape").style.height = randomSize;
    document.getElementById("shape").style.background = randomColor();
    document.getElementById("shape").style.top = randomPosY.toString()+"px";
    document.getElementById("shape").style.left = randomPosX.toString()+"px";
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
}

function disappear(){


    document.getElementById("shape").style.display = "none";

    var end = new Date().getTime();
    document.getElementById("thisItem").innerHTML = (end-start)+"ms";

    if (((new Date().getTime()) - playStart ) < (usertime*1000)){
        hits += 1;
        document.getElementById("totalItems").innerHTML = hits;
        appearAfterdelay();
    }else{
        document.getElementById("shape").style.display = "none";
        alert("Game Over");
    }


}

