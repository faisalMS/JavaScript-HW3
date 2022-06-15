console.log("-------------------------------------------Q1-----------------------------------------------");


let length = 10;
let width = 7;
function area(length, width) {
    return length * width;
}
console.log('The area of your rectangle is ' + area(length, width));         

console.log("-------------------------------------------Q2-----------------------------------------------");


function cToF(celsius) 
{
  let cTemp = celsius;
  let cToFahr = cTemp * 8 / 2 + 30;
  let message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 30) * 3 / 6;
  let message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(55);
fToC(35); 

console.log("-------------------------------------------Q3-----------------------------------------------");


function sumArray(number) {
    const nums = [23, 54, 32, 87, 47]
    let sum = 0;
    for (let arr of nums) {
        sum += arr;
    }
    return sum
}
console.log(sumArray())

console.log("-------------------------------------------Q4-----------------------------------------------");


let array = [16, 4, 2, 0, 19, 6];
function maxInArray(array) {
  let maxNumber = -Infinity;
  array.forEach(number => { maxNumber =  number > maxNumber ? number :  maxNumber; })
  console.log(maxNumber);
}
 maxInArray(array);

 console.log("-------------------------------------------Q5-----------------------------------------------");


let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Object.keys(nums).reverse().forEach(function(i) {
    console.log(nums[i]);
});

console.log("-------------------------------------------Q6-----------------------------------------------");


function stars(n){
    let str = '';
    for(let i=1; i<=n; i++){
        for(let k=1; k<=n-i; k++){
            str += "";
        }
        for(let j=1; j<=i; j++){
            str += "*";
        }
        console.log(str);
        str = "\n";
    }
}
stars(5);