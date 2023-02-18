let cookie= '_ga=88; _gid=95; _ga_XLZVRYL8JV=45'
cookie=cookie.split(';');
console.log(cookie);
let cookies_key_value = []
for (index in cookie){
    let key_value = cookie[index].trim().split("=")
    cookies_key_value[key_value[0]]=key_value[1]

}
console.lo
console.log('_ga' in cookies_key_value)

