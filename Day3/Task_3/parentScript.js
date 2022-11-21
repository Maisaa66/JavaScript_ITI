
function openChild (){
     win = open("child.html", "", "width=200, height=200");
}

function stopMove(){
    clearInterval(intervalID);
    win.focus();

}