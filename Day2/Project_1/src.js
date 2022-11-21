var str = prompt("Please enter an string");
var char = prompt("Please enter the char to be count");
var caseSens = confirm("Do you want not to consider diffrence between letter cases?");
var counter=0;
let reg;
if(caseSens){
    reg = new RegExp(char, 'gi');
    counter = str.match(reg).length;
}
else{

    reg = new RegExp(char, 'g');
}


document.write("The counter of "+char+" is "+ counter);

