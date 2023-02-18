var imagesSrc=[
    'images/1.jpg' ,
    'images/2.jpg' ,
    'images/3.jpg' ,
    'images/4.jpg' ,
    'images/5.jpg' ,
    'images/6.jpg'

]
var i=0, slideInterval;
function nextImg() {
    console.log(imagesSrc[i])
    if(i!= imagesSrc.length-1 ){
        i++;
        document.getElementById('image').src=imagesSrc[i];
    }
}

function prevImg() {
    if(i!=0){
        i--;
        document.getElementById('image').src=imagesSrc[i];
    }
}

function slide() {
    if(i!= imagesSrc.length-1 ){
        i++;
        document.getElementById('image').src=imagesSrc[i];
    }
    else{
        i=0;
        document.getElementById('image').src=imagesSrc[i];

    }
}
function slideShow() {

slideInterval=setInterval(slide, 1500);
}

function stop() {
    clearInterval(slideInterval)
}