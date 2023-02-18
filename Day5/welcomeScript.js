import* as cookies from './cookies.js';
let body = document.querySelector("body");

body.onload = function showData(){
    let gender = cookies.getCookie('gender');
    let userName = cookies.getCookie('name');
    let color = cookies.getCookie('color');
    let age = cookies.getCookie('age');
    let visitNum = cookies.getCookie('visitNum');
    cookies.setCookie('visitNum',parseInt(visitNum) +1 );

    if(gender ==='male'){
        document.getElementById('image').src='/images/1.jpg';
    }
    else{
        document.getElementById('image').src='/images/2.jpg';
    
    }

    document.getElementById('txt').innerHTML = "<b>Welcome, </b>"+"<span style='color:"+color+"'>"+userName+"</span>"+" this is the "+"<span style='color:"+color+"'>"+visitNum+"</span>"+" visit for you";

}
