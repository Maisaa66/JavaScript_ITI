// Create a simple form that on submit display confirmation
// message and according to user action it will either stop submission
// from proceeding or it will continue form submission. Make your
// own custom event “timeout” that fires after 30 seconds if the user
// has not entered any data

// Getting the form element
let form = document.getElementById("register");

//get elements of the form
let fields = form.elements

//Getting the submit button
let submit = document.getElementById("submit-btn");

//Modify the event done on submit
//the default behaviour of submit is to take you to other page
//if the user did not confirm he will stay at the same page
form.addEventListener("submit", function(event){
    let reponse = confirm("Do You Want To Continue?")
    if(!reponse){
        alert("You Cannot Porceed Your Submissiom, Sorry!");
        event.preventDefault();
    }
})

//add new event
let newEvent = new Event("timeout")
form.addEventListener("timeout", function(){
    alert("Please enter you data!")
})

//timeOut function to check if all the form field is empty or not 
//if it is empty we will dispatch the event after 2.5 seconds
// and will ask the user to enter his data
function timeOut(){
    let flag=true;
    for (var i = 0, field; field = fields[i++];) {
        if (field.type !== "fieldset" && field.value === "")
            flag=false;
    }

    if(!flag){
        form.dispatchEvent(newEvent);
    }
}

setTimeout(timeOut, 2500);
