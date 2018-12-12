var firstPic = document.getElementById("emerson");
var secPic = document.getElementById("fuller");
var thirdPic = document.getElementById("alcott");
var fourthPic = document.getElementById("thoreau");
var useless = document.getElementById("useless");
var free = document.getElementById("free");
var uselessBtn = document.getElementById("useless-button");
var message = document.getElementById("message");
var counter = document.getElementById("count");
var back = document.getElementById("back");
var whole = document.getElementById("whole");

var currentPic = 0;
var counter = 0;


function nextPic(){
    if(currentPic == 3){
        currentPic = 0;
    }else{
        currentPic++;
    }
    if(currentPic == 0){
        firstPic.style.display = "inherit";
        secPic.style.display = "none";
        thirdPic.style.display = "none";
        fourthPic.style.display = "none";
    }
    else if(currentPic == 1){
        secPic.style.display = "inherit";
        firstPic.style.display = "none";
        thirdPic.style.display = "none";
        fourthPic.style.display = "none";
    }
    else if(currentPic == 2){
        thirdPic.style.display = "inherit";
        secPic.style.display = "none";
        firstPic.style.display = "none";
        fourthPic.style.display = "none";
    }
    else if(currentPic == 3){
        fourthPic.style.display = "inherit";
        secPic.style.display = "none";
        thirdPic.style.display = "none";
        firstPic.style.display = "none";
    }
}

function lastPic(){
    if(currentPic == 0){
        currentPic = 3;
    }else{
        currentPic--;
    }

    if(currentPic == 0){
        firstPic.style.display = "inherit";
        secPic.style.display = "none";
        thirdPic.style.display = "none";
        fourthPic.style.display = "none";
    }
    else if(currentPic == 1){
        secPic.style.display = "inherit";
        firstPic.style.display = "none";
        thirdPic.style.display = "none";
        fourthPic.style.display = "none";
    }
    else if(currentPic == 2){
        thirdPic.style.display = "inherit";
        secPic.style.display = "none";
        firstPic.style.display = "none";
        fourthPic.style.display = "none";
    }
    else if(currentPic == 3){
        fourthPic.style.display = "inherit";
        secPic.style.display = "none";
        thirdPic.style.display = "none";
        firstPic.style.display = "none";
    }
}

function showUseless(){
    free.style.textAlign = "center";
    free.style.marginBottom = "25px";
    uselessBtn.style.width = "50%";
    uselessBtn.style.height = "400px";
    uselessBtn.style.marginLeft = "auto";
    uselessBtn.style.marginRight = "auto";
    uselessBtn.style.borderRadius = "50%";
    uselessBtn.style.marginBottom = "15px";
    useless.style.display = "inherit";
    free.style.display = "inherit";
    uselessBtn.style.display = "inherit";
    message.style.display = "inherit";
    whole.style.display = "none";
    useless.style.background = "none";
    useless.style.background = "white";
    free.style.background = "none";
    free.style.background = "white";
    uselessBtn.style.background = "none";
    uselessBtn.style.background = "white";
    uselessBtn.style.marginBottom = "200px";
    message.style.background = "none";
    message.style.background = "white";
    message.style.width = "100%";
    message.style.textAlign = "center";
    counter.style.display = "inherit";
    counter.style.background = "none";
    counter.style.background = "white";
    back.style.display = "inherit";
    back.style.background = "none";
    back.style.background = "black";
    back.style.color = "white";
}

function count(){
    count++;
    counter.innerHTML = "Counter: " + count;
}

function back(){
    whole.style.display = "inherit";
    useless.style.display = "none";
    free.style.display = "none";
    uselessBtn.style.display = "none";
    message.style.display = "none";
    back.style.display = "none";
}
