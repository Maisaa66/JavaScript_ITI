
var win;
var x=0, y=0, flag=true;
let movmentBy=100;
    function openChild (){
        win = open("child.html", "", "width=200, height=200");
    }

    function moveWin(x,y){

    win.moveBy(x,y);
    win.focus();
    }

    function resizeWin (){
      win.resizeBy(150,150);
    }

var intervalID  = setInterval("bounce()", 200);
function bounce(){
    if(x==0 && y==0){
        flag=true;
    }
    if(x> (window.innerWidth-movmentBy) && y>(window.innerHeight-movmentBy)){
        flag=false;
    }

    if(flag){
        win.moveBy(movmentBy*2.25,movmentBy);
        x+=movmentBy;
        y+=movmentBy;
    }
    else{
        win.moveBy(-movmentBy*2.25,-movmentBy);
        x-=movmentBy;
        y-=movmentBy;
    }
    win.focus();
     console.log(window.innerHeight, window.innerWidth);

}

  function stopMove(){
      clearInterval(intervalID);
      win.focus();

  }