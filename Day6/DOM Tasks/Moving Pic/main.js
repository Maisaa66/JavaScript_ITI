let movment1 = 10;
let movment2 = 10;
let movment3 = 10;
let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("top");
let btnValue = document.getElementById("go");

let moveInterval;

//will change the button value
//and if the value is go it will call the moving function for several interval until stop
//stop will clear the interval
function GO() {
  if (btnValue.value === "GO") {
    btnValue.value = "STOP";
    moveInterval = setInterval(moving, 100);
  } else {
    btnValue.value = "GO";
    clearInterval(moveInterval);
  }
}

//adjusting the position of images so it can bounce go and back
function moving() {
  let txt1 = document.getElementById("p1");
  let txt2 = document.getElementById("p2");
  let txt3 = document.getElementById("p3");

  let left_icon1 = getComputedStyle(icon1).left;
  let left_icon2 = getComputedStyle(icon2).left;
  let top_icon = getComputedStyle(icon3).top;

  actualLeftIcon_1 = parseInt(left_icon1);
  actualLeftIcon_2 = parseInt(left_icon2);
  actualTOPIcon = parseInt(top_icon);

  //adjusting the first image position by checking it reaches the boundries of the div or not
  if (actualLeftIcon_1 > 410 || actualLeftIcon_1 < 10) {
    movment1 = -movment1;
  }
  actualLeftIcon_1 += movment1;
  icon1.style.left = actualLeftIcon_1 + "px";
  txt1.innerText =
    '<img src="images/icon1.gif" style="left: ' + left_icon1 + '"\\>';

  //adjusting the second image position by checking it reaches the boundries of the div or not
  if (actualLeftIcon_2 < 10 || actualLeftIcon_2 > 415) {
    movment2 = -movment2;
  }
  actualLeftIcon_2 += movment2;
  icon2.style.left = actualLeftIcon_2 + "px";
  txt2.innerText =
    '<img src="images/icon1.gif" style="left: ' + left_icon2 + '"\\>';

  //adjusting the third image position by checking it reaches the boundries of the div or not

  if (actualTOPIcon < 10 || actualTOPIcon > 425) {
    movment3 = -movment3;
  }
  actualTOPIcon -= movment3;
  icon3.style.top = actualTOPIcon + "px";
  txt3.innerText =
    '<img src="images/icon1.gif" style="top: ' + top_icon + '"\\>';
}

//reset button function
//if the button value is stop, change it to go and clear the interval 
//then start moving from the original positions
function RESET() {
  if (btnValue.value === "STOP") {
    btnValue.value = "GO";
    clearInterval(moveInterval);
    icon3.style.top = "425px";
    icon1.style.left = "10px";
    icon2.style.left = "415px";
    GO();
  } else {

    //if the value of button if go
    //it wil just clear the interval
    //because the images was already stopped so we do not need to move them
    clearInterval(moveInterval);
    icon3.style.top = "425px";
    icon1.style.left = "10px";
    icon2.style.left = "415px";
  }
}
