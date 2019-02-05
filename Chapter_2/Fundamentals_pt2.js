var sigma = (num) => {
    var sum = 0;
    for(let i = 0; i <= num; i++){
        sum += i;
    }
    return sum;
}
// num = 3
// console.log("testing sigma(",num,"): ", sigma(num));
// num = 5
// console.log("testing sigma(",num,"): ", sigma(num));

var factorial = (num) => {
    var ans = 1;
    for(let i = 1; i <= num; i++){
        ans *= i;
    }
    return ans;
}
// var num = 3;
// console.log("testing factorial(",num,"): ", factorial(num));
// var num = 5;
// console.log("testing factorial(",num,"): ", factorial(num));

// *** Star Art *** //
var repeat = (str, num) => {
    var output = str;
    for(let i = 0; i < num; i++){
        output += str;
    };
    return output;
}
var drawLeftStars = (num, char) => {
    if(num > 75){
        return repeat(char,75);
    }else{
        return repeat(char,num);
    }
}
var drawRightStars = (num, char) => {
    if(num >= 75){
        return repeat(char,75);
    }else{
        return repeat(" ",(75-num))+repeat(char,num);
    }
}
var drawCenteredStars = (num, char) => {
    if(num >= 75){
        return repeat(char,75);
    }else if(num % 2 != 0){
        let leftSpace = (75-num)/2
        let rightSpace = (75-num)/2
        return repeat(" ",leftSpace)+repeat(char,num)+repeat(" ",rightSpace);
    }else{
        return repeat(" ",((75-num)/2))+repeat(char,num)+repeat(" ",(1+(75-num)/2));
    }
}
// num = 85;
// var char = "$";
// console.log("drawLeftStars(",num,",",char,"): \n", drawLeftStars(num,char));
// console.log("drawRightStars(",num,",",char,"): \n", drawRightStars(num,char));
// console.log("drawCenteredStars(",num,",",char,"): \n", drawCenteredStars(num,char));
// num = 75;
// console.log("drawLeftStars(",num,",",char,"): \n", drawLeftStars(num,char));
// console.log("drawRightStars(",num,",",char,"): \n", drawRightStars(num,char));
// console.log("drawCenteredStars(",num,",",char,"): \n", drawCenteredStars(num,char));
// num = 15;
// console.log("drawLeftStars(",num,",",char,"): \n", drawLeftStars(num,char));
// console.log("drawRightStars(",num,",",char,"): \n", drawRightStars(num,char));
// console.log("drawCenteredStars(",num,",",char,"): \n", drawCenteredStars(num,char));

var threeFives = (start, end) => {
    let numSum = 0;
    for(let i = start; i <= end; i++){
        let mod3 = i % 3;
        let mod5 = i % 5;
        if(mod3 == 0 && mod5 == 0){
            continue;
        }else if(mod3 != 0 && mod5 != 0){
            continue;
        }else{
            numSum += i;
        }
        console.log("i: ",i," numSum: ",numSum);
    }
    return numSum;
}
// var start = 100;
// var end = 400;
// console.log("threeFives(",start,",",end,"): ", threeFives(start,end));

var generateCoinChange = (cents) =>{
    var input = cents;
    var dol = Math.trunc(cents/100);
    var hal = Math.trunc((cents%100)/50);
    cents = (cents%100)%50;
    var qtr = Math.trunc(cents/25);
    var dim = Math.trunc((cents % 25)/10);
    var nic = Math.trunc(((cents%25)%10)/5);
    var pen = ((cents%25)%10)%5;
    console.log(
        input,"can be broken down into the following changes:\n dollars:",dol,"\nhalf-dollar:",hal,"\n quarters:",qtr,"\n dimes:",dim,"\nnickles:",nic,"\n pennies:",pen
    )
}
// var cents = 100;
// generateCoinChange(cents);
// var cents = 110;
// generateCoinChange(cents);
// var cents = 168;
// generateCoinChange(cents);

var messyMath = (num) => {
    var sum = 0;
    for(let i = 0; i <= num; i++){
        if(i == num/3){
            return -1;
        };
        if(i % 3 == 0){
            continue;
        }else if(i % 7 == 0){
            sum += 2*i;
        }else{
            sum += i;
        };
    }
    return sum;
}
// var num = 4;
// console.log("messyMath(",num,"): ", messyMath(num));
// num = 8;
// console.log("messyMath(",num,"): ", messyMath(num));
// num = 15;
// console.log("messyMath(",num,"): ", messyMath(num));

var fibonacci = (num) => {
    if(num == 0){
        return 0;
    }else if(num == 1){
        return 1;
    }else{
        return fibonacci(num-2)+fibonacci(num-1);
    }
}
// var num = 0;
// console.log("fib(",num,")",fibonacci(num));
// num = 1;
// console.log("fib(",num,")",fibonacci(num));
// num = 3;
// console.log("fib(",num,")",fibonacci(num));
// num = 6;
// console.log("fib(",num,")",fibonacci(num));

var sumToOne = (num) => {
    let sum = 0;
    let incr = 10;
    while(num != 0){
        mod = num % incr;
        sum += mod*(10/incr);
        num -= mod;
        incr *= 10;
    }
    if(sum >= 10){
        return sumToOne(sum);
    }else{
        return sum;
    }
}
// num = 929;
// console.log("sumToOne(",num,"): ", sumToOne(num));

var clockHandAngles = (time) => {
    var modHr = time % 43200;
    var degHr = modHr/120;
    var modMin = time % 3600;
    var degMin = modMin/10;
    var modSec = time % 60;
    var degSec = modSec/2;
    console.log("Hour: ",degHr,"degrees\nMinute: ",degMin,"degrees\nSecond: ",degSec,"degress");
}
// var time = 119730;
// console.log("clockHandAngles(",time,"): ", clockHandAngles(time));

var isPrime = (num) =>{
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}
num = 5;
console.log("isPrime(",num,"): ", isPrime(num));
num = 15;
console.log("isPrime(",num,"): ", isPrime(num));
num = 29;
console.log("isPrime(",num,"): ", isPrime(num));