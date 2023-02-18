/* Create an animation on the page that makes an orange marble move to the next
location in the line every second. Allow the user to stop the animation by placing
the cursor on any marble. The animation will restart again once the user remove the cursor
from that marble. Add your own interesting feature to the script that tinkers with the speed or
 location of images
 */

let images = document.images;
let i, current=0;
let timeInterval;
let flag =true;

function changeImg() {

/*
    timeInterval = setInterval(function () {
        if(index != images.length){
            setTimeout(function (){
                images[index].src='/images/marble3.jpg';
            }, 500)

            setTimeout(function (){
                images[index].src='/images/marble1.jpg';
            }, 800)
            index++;
        }

        else{
            index=-1;
            setTimeout(function (){
                images[index].src='/images/marble3.jpg';
                flag=false;
            }, 500)

            setTimeout(function (){
                images[index].src='/images/marble1.jpg';
            }, 800)
        }
    }, 1000)*/

timeInterval=setInterval(function (){

console.log("in timer")
    for(i=0;i<images.length;i++){
        if(i==current){
                images[i].src='/images/marble3.jpg';
        }
        else{
            images[i].src='/images/marble1.jpg';

        }

    }

current++;

},1000)

console.log("in fn")
}

changeImg();
function stop() {

        clearInterval(timeInterval);

}














