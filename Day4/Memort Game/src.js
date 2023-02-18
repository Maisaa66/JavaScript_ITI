let moonImg = document.images

let flippedImg = []
let score=0;

function showScore(){
    document.getElementById('score').innerHTML="Your Current Score is: "+score;

}

// function to reveal the image under the moon at each click
function reveal(img) {

 img.src='images/'+ img.alt + '.gif';
 flippedImg.push(img);
 if(flippedImg.length==2){
    setTimeout(checkMatch, 500);
 }

}

//this function to check if the two images are identical or not
function checkMatch(){
    if(flippedImg[0].src!==flippedImg[1].src){
        flippedImg[0].src='images/Moon.gif';
        flippedImg[1].src='images/Moon.gif';

    }
    else{
        score++;
        showScore();
    }
    
    flippedImg=[];
}


