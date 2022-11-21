var userMassage, sum=0;
do{
    userMassage=prompt("Pleaster enter numbers to be summed and if you want to exit press 0");
    var number=parseInt(userMassage)

    if( number === NaN ){
        number=0;
    }
else{
        sum+=number;

    }

}while((number != 0) && (sum<100))

if(isFinite(sum))
    document.write("The Sum You Entered is "+sum);
else{
    document.write("you entered an unvalid number caused nan");

}


