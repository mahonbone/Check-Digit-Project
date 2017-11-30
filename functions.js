function getSum(total, num) {
    return total + num;
}
function getCheckDigit(){
    var upc=document.getElementById("upc").value;
    var evens=[];
    var odds=[];
    for(var i=0; i<upc.length; i++){
        if(i%2==0){
            odds.push(+upc[i]);
        }else{
            evens.push(+upc[i]);
        }
    }
    var even = evens.reduce(getSum);
    var odd = odds.reduce(getSum);
    var checkDigit = 10-((odd*3)+even)%10;
    if(checkDigit === 10){
        checkDigit = 0;
    }
    document.getElementById("checkDigit").innerHTML ="UPC: " + upc+checkDigit + "<br>Check Digit: " + checkDigit;
} 