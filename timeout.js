
var timeOut;
var time=3000;
var redirect_url="exit.html";

function startTimeOut(){
    timeOut = window.setTimeout(function (){
        window.location = redirect_url;
    }, time);
}


document.addEventListener("click", function(){
    if (timeOut){
        clearTimeout(timeOut);
    }
    startTimeOut();
});
document.addEventListener("mousemove", function(){
    if (timeOut){
        clearTimeout(timeOut);
    }
    startTimeOut();
});

startTimeOut();