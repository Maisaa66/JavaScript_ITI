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
    open("preview.html", "");
}

