//this function do the follow
//First it will check if there is a data saved in cookie or not
//1-get the cookie to get the image name and the msg wriiten by the customer
//2-create div element to store the image in it and img element
//3-create paragraph element to write the msg on it
//4-and append all this in the body

//if not it will show an alert to return and choose image and write a msg

function preview(){
let checkCookie = allCookie()
console.log(checkCookie)
if(checkCookie!==''){
    let button = document.getElementById("btnContainer")
    let source = getCookie('image');
    console.log(source);
    let msg = getCookie('msg')
    console.log(msg);
    
    //create div to store the image
    var imgDiv = document.createElement('div');
    
    //style the div of image
    imgDiv.id = "imgDiv";
    imgDiv.style.textAlign="center";
    imgDiv.style.marginTop="10px";
    console.log(imgDiv);
    
    //create image element
    var img = document.createElement('img');
    
    //style image element
    img.id="choosedImg";
    img.src=source;
    img.style.width="300px";
    img.style.height="200px";
    img.style.margin="10px";
    
    //append the img in the div
    imgDiv.appendChild(img);
    
    //append the div at the body of html
    document.body.insertBefore(imgDiv, button )
    
    //clone the outer structure of img div
    var msgPargarph = document.createElement('p');
    
    //style the div that will carry the text
    msgPargarph.id = "msgPargarph";
    msgPargarph.style.marginTop="0px"
    msgPargarph.style.textAlign="center";
    msgPargarph.style.color="green";
    msgPargarph.style.fontFamily="Brush Script MT";
    msgPargarph.style.fontSize="50px"
    msgPargarph.style.textShadow="2px 2px 2px pink"
    
    //create span elem
    msgPargarph.id="txtId"
    console.log(msgPargarph);
    
    const msgText = document.createTextNode(msg);
    msgPargarph.appendChild(msgText);
    document.body.insertBefore(msgPargarph, button);
    
}

else{
    let response = window.alert("Please choose image and write a massage to generate your card!")
    if(response===undefined){
        window.close();
    }
}


}

preview();

function closeWindow(){
    deleteCookie('msg');
    deleteCookie('image');
    window.close();
}