let images=document.images

function setBorder(id){

for(i=0;i<images.length;i++){
    if(document.images[i].id==id){
        document.images[i].style.border="5px solid maroon";
    }
    else{
        document.images[i].style.border="";

    }
}



}

function openPreview(){
    let answer = saveInfo();
    console.log(answer);
    if(answer!==undefined){
        open("preview.html", "", "width=650px, height=500px");

    }
    
}



//function the svae data in cookie
function saveInfo(){
let imageChecked=false;
let msg = document.getElementById('complaint')
let response

for(i=0;i<images.length;i++){
    let image=document.getElementsByName('radiobtn')[i]
    if(image.checked){
        setCookie('image', document.getElementsByTagName('img')[i].getAttribute('src'))
        let image=document.getElementsByName('radiobtn')[i].checked=false;
        imageChecked=true;
        setBorder(0);
    }
}

if(msg.value===""){
    response = window.alert("You did not write a massage");

}
else if(!imageChecked && msg.value===''){
    response = window.alert("You did not write a massage or choose a image");
}
else if (!imageChecked){
    response = window.alert("You did not choose a image");

}
else{
    setCookie('msg', msg.value)
    msg.value='';
    response=true;
}

console.log(msg.value);
console.log(imageChecked);
console.log(response);
console.log(allCookie())

return response;



}


