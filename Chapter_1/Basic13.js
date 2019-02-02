console.log("Print 1-255","***"*10);
for(let i = 1; i<=255; i++){
    console.log(i);
}

console.log("Print Odds 1-255", "***"*10);
for(let i = 1; i<=255; i+2){
    console.log(i);
}

console.log("Print ints and sum 0-255", "***"*10);
var sum = 0;
for(let i = 0; i <= 255; i++){
    sum += i;
    console.log(i, " and sum: ", sum);
}

console.log("Print Array values");
var printArrayVals = function(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
arr1 = [10,12,-1,20];
printArrayVals(arr1);

console.log("Print Max of Array");
var printMaxOfArray = (arr) =>{
    var max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}
arr2 = [1,-1,10,232];
printMaxOfArray(arr2);

console.log("Print Average of Array");
var printAverageOfArray = (arr) => {
    var sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}
arr3 = [132,131, -111, -23];
printAverageOfArray(arr3);

console.log("Return Odds array 1-255");
var OddsArr = function(){
    var oddArr = [];
    for(let i = 1; i <= 255; i++){
        if(i % 2 != 0){
            oddArr.push(i);
        }
    }
    return oddArr;
}

console.log("Square Array values");
var squareArr = (arr)=>{
    for(let i = 0; i < arr.length; i++){
        arr[i] *= arr[i];
    }
    return arr;
}
arr5 = [-1,24,10,82];
console.log(squareArr(arr5));

console.log("REturn Array Count greater than Y");
var greaterY = function(arr, Y){
    var count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > Y){
            count++;
        }
    }
    return count;
}
arr6 = [23, 12, 1, -10, 4];
console.log(greaterY(arr6, 5));

console.log("zero-out Array negative number");
var zeroNegarr = (arr) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}
var arr7 = [12,12,12,-40];
console.log(zeroNegarr(arr7));

console.log("print max, min, average array values");
var mmaArr = (arr){
    if(arr.length == 0){
        return null;
    }
    if(arr.length == 1){
        return console.log("max = min = average : ", arr[0]);
    }
    var max = arr[0];
    var min = max;
    var sum = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
        sum += arr[i];
    };
    var average = sum/arr.length;
    return console.log("max: ",max," min: ",min," average: ",average);
}
var arr8 = [12,32,-123];
mmaArr(arr8);

console.log("shift Array values left");
var shiftLeft = (arr) => {
    if(arr.length == 0){
        return null;
    }
    if(arr.length == 1){
        arr = [0];
        return arr;
    }
    for(let i = 0; i < arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length] = 0;
    return arr;
}
var arr9 = [12, 21, 13,31];
console.log(shiftLeft(arr9));

console.log("Swap String for Array Negative values");
var swapArrNeg = (arr) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}
var arr10 = [12,-21,21];
console.log(swapArrNeg(arr10));