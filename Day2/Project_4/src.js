let validName, validTele, validPhone, validEmail;
alert("Welcome client");
let colorFormat = prompt("Enter the color you want (red, blue or green");

let namePattern = /^[a-zA-Z]+$/gi;
let telePattern = /[0-9]{8}$/
let phonePattern = /^(011|012|010)+[0-9]{8}$/
let emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{3}$/
//name
var nameClinet = prompt("Please enter your name");
while(!namePattern.test(nameClinet)){
    nameClinet = prompt("Please enter your name again");
}


validName=nameClinet;
document.write("<h1 style=color:"+colorFormat+";>"+ "Hello dear "+ "</h1>"+ "<h1>" + validName + "</h1>" );

//telephone
var teleClient = prompt("Please enter you telephone");

while(!telePattern.test(teleClient)){
    teleClient = prompt("Please enter your telephone again");
}

validTele=teleClient;
document.write("<h1 style=color:"+colorFormat+";>"+ "Your telephone number is: "+ "</h1>"+ "<h1>" + validTele + "</h1>" );

//Phone
var phoneClient = prompt("Please enter your mobile number");
while(!phonePattern.test(phoneClient)){
    phoneClient = prompt("Please enter your mobile again");
}

validPhone=phoneClient;
document.write("<h1 style=color:"+colorFormat+";>"+ "Your mobile number is: "+ "</h1>"+ "<h1>" + validPhone + "</h1>" );

//email

var emailClient = prompt("Please enter your email");
while(!emailPattern.test(emailClient)){
    emailClient = prompt("Please enter your email again");
}

validEmail=emailClient;
document.write("<h1 style=color:"+colorFormat+";>"+ "Your email is: "+ "</h1>"+ "<h1>" + validEmail + "</h1>" );
