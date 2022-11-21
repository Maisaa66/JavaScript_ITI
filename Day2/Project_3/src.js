var str = prompt("Please enter a string");
let max;
str=str.toLowerCase();
max = largestWord(str);
document.write(max);



function largestWord (str){
    var i;
    var strSplit = str.split(" ")
    var max= strSplit[0];
    for(i=1;i<strSplit.length;i++){
        if(strSplit[i].length > max.length){
            max = strSplit[i];
        }
    }

    return max;
}