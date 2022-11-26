document.addEventListener("keydown", function(event){
    let asciiCode = event.which
    if(event.altKey){
        alert("The alt key is pressed")
    }
    if(event.ctrlKey){
        alert("The ctrl key is pressed")
    }
    if(event.shiftKey){
        alert("The shift key is pressed")
    }
})