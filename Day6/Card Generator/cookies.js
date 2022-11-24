// implementation of cookies functions library
//let cookie= '_ga=88; _gid=95; _ga_XLZVRYL8JV=45'


// Retrieves a cookie value based on a cookie name.
function getCookie(cookieName) {
let completeCookie = allCookie();
let splittedCookies = splitCookie(completeCookie);
return splittedCookies[cookieName]

}
//function to set the cookies information of the user
function setCookie(cookieName, cookieValue, expiryDate ) {
    if(typeof expiryDate !== 'undefined'){
        document.cookie = cookieName+"="+cookieValue+"; expires ="+expiryDate.toGMTString()+";";

    }
    else{
        document.cookie =cookieName+"="+cookieValue+";";

    }
}

//Deletes a cookie based on a cookie name.
function deleteCookie(cookieName) {
    let date = new Date()
    document.cookie=cookieName + "=null; expires=" + date.toGMTString();
}

//returns a list of all stored cookies
function allCookie() {
let cookie = document.cookie;
return cookie
}
//Check whether a cookie exists or not
function hasCookie(cookieName) {
    let completeCookie = allCookie();
    let splittedCookies = splitCookie(completeCookie);
    return (cookieName in splittedCookies)
}

function splitCookie(cookie){
    //let cookie= '_ga=88; _gid=95; _ga_XLZVRYL8JV=45'
    cookie=cookie.split(';');
    let cookies_key_value = [];
    let index;
    for (index in cookie){
        let key_value = cookie[index].trim().split("=")
        cookies_key_value[key_value[0]]=key_value[1]
    
    }

    return cookies_key_value;

}

