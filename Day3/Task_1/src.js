var arr=[];

do{
    var arrInput = prompt("Please fill the array to exit press c");
    if(arrInput!='c'){
        arr.push(arrInput);

    }
}while(arrInput!='c')

console.log("%c The array is "+ arr , "color:red");
// sort ascending
arr.sort(function (a,b) {return a-b} );
console.log("%c The array in ascending order "+ arr , "color:red");

//sort descending
arr.sort(function (a,b) {return b-a} );
console.log("%c The array in descending order "+ arr , "color:red");