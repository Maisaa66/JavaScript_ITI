var str = prompt("Please enter an string");
var caseSens = confirm("Do you want to consider diffrence between letter cases?");
var strLen=str.length;
var flag=true;

if(caseSens){
    for(var i=0;i<(strLen)/2;i++){
        if(str.charAt(i)!==str.charAt(strLen-i-1)){
            flag=false;
        }
    }
}
else{
    var newStr=str.toLowerCase();
    for(var i=0;i<(strLen)/2;i++){
        if(newStr.charAt(i)!=newStr.charAt(strLen-i-1)){
            flag=false;
        }
    }
}

if(flag){
    document.write(str + " is Plandirome");
}
else{
    document.write(str + " is not Plandirome");

}