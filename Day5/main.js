import*  as cookies from './cookies.js';
let date = new Date((new Date()).getTime() + (10 * 86400000))
var win;

document.getElementById('saving').onclick = function openWelcomePage() {
    win = open("welcome.html", "");

    saveInfo();
    
}



//function the svae data in cookie
function saveInfo(){

cookies.setCookie('name', document.getElementById('name').value,date );
cookies.setCookie('age', document.getElementById('age').value,date );

if( document.getElementById("f").checked){
    cookies.setCookie('gender', 'female',date );

}
else if ( document.getElementById("m").checked){
    cookies.setCookie('gender', 'male',date );

}

cookies.setCookie('visitNum', 1,date );
cookies.setCookie('color',document.getElementById('color').value ,date );


}