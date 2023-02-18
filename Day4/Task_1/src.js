var win;
function openWelcomePage() {
    win = open("Welcome_Page.html", "");
}

let queryString = (window.location.search).substring(1);
let splitted_queryString = queryString.split('&');
var value=[];

for(var i =0;i<splitted_queryString.length -1 ;i++){
    let splittedValues = splitted_queryString[i].split('=');
    value[splittedValues[0]]=splittedValues[1]
}

console.log(value);

document.getElementById("name").innerHTML="Hello Dear "+ value['Name'];
document.getElementById("email").innerHTML="Your Email is "+ (value['Email'].replace(/%/, '@'));
document.getElementById("mobile").innerHTML="Your Mobile Number is "+ value['Mobile'];
document.getElementById("address").innerHTML="Your Address  is "+ value['Address'];
document.getElementById("gender").innerHTML="Your Gender  is "+ value['gender'];

let agent = navigator.userAgent;
agent=agent.split(' ');
agent=agent[agent.length-1].split('/')
if(agent[0] != 'Chrome'){
    alert("Please use chrome browser");
}
else{
    alert("Thanks for using chrome");
}