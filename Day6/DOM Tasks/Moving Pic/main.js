let movment1=10;
let movment2=10;
let movment3=10;
let icon1=document.getElementById("icon1");
let icon2=document.getElementById("icon2");
let icon3 = document.getElementById("top");
let btnValue=document.getElementById("go")

let moveInterval

function GO() // no ';' here
{

    if (btnValue.value==="GO") 
    {btnValue.value = "STOP";
        moveInterval = setInterval(moving, 100)
    }
    else {
        btnValue.value = "GO"
        clearInterval(moveInterval)

            };




}


function moving(){

    let txt1 = document.getElementById("p1");
    let txt2 = document.getElementById("p2");
    let txt3 = document.getElementById("p3");


    let left_icon1=getComputedStyle(icon1).left;
    let left_icon2=getComputedStyle(icon2).left;
    let top_icon=getComputedStyle(icon3).top;

    actualLeftIcon_1 = parseInt(left_icon1)
    actualLeftIcon_2 = parseInt(left_icon2)
    actualTOPIcon = parseInt(top_icon)



            if(actualLeftIcon_1>(410) || actualLeftIcon_1<10){
                movment1 = - movment1;
        
                }
            actualLeftIcon_1 += movment1;
            icon1.style.left=actualLeftIcon_1+"px";
            txt1.innerText='<img src="images/icon1.gif" style="left: '+left_icon1+'"\\>';
    


        if(actualLeftIcon_2 < 10 || actualLeftIcon_2 > 415){
            movment2 = - movment2;
        }
        actualLeftIcon_2 += movment2;
        icon2.style.left=actualLeftIcon_2+"px";
        txt2.innerText='<img src="images/icon1.gif" style="left: '+left_icon2+'"\\>';


            if(actualTOPIcon<10 || actualTOPIcon> 425){
                movment3 = - movment3;
            }
            actualTOPIcon -= movment3;
            icon3.style.top=actualTOPIcon+"px";
            txt3.innerText='<img src="images/icon1.gif" style="top: '+top_icon+'"\\>';



}


function RESET(){

    if (btnValue.value==="STOP") 
    {
        btnValue.value="GO"
        clearInterval(moveInterval);
        icon3.style.top="425px"
        icon1.style.left="10px"
        icon2.style.left="415px"
        GO();

}
else{
        clearInterval(moveInterval);
        icon3.style.top="425px"
        icon1.style.left="10px"
        icon2.style.left="415px"


    };




}