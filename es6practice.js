//ES6

function abc(){
    // console.log(a); //can't be used here
    let a = 10;
    console.log(a);

    if(a<20){
        console.log('Less');
    }
    else{
        console.log('More');
    }
}

abc();

//IIFE
{
    let v = 30;
}

// console.log("V = " + v);


//Strings in ES6

let a = "abc";
let b = "xyz";

console.log("Concatenating strings " + a + " " + b);
console.log(`Concatenating strings ${a} ${b}`);


//Arrow Function
const years = [1990, 1985, 1996];
var agesES5 = years.map(function(el)
{
    return 2020-el;
});

console.log(agesES5);

var agesES6 = years.map(el => (2020-el));

console.log(agesES6);

//Destructuring
//Arrays
let person = ['John',25];
const [name, age] = person;
console.log(name);
console.log(age);

//For Objects
let obj = {
    nameObj : 'John',
    ageObj : 25,
}

let {nameObj, ageObj} = obj;
console.log(nameObj);
console.log(ageObj);

//Using Alias
const {nameObj:a1, ageObj:b1} = obj;
console.log(a1);
console.log(b1);

// Call, Apply and Bind Methods have better versions in ES6

// Arrays.asList is Arrays.from in Javascript


//for-of loop in ES6
console.log('Arrays');
const arr = [1,2,3,4,5];

for(arrElement of arr){
    console.log(arrElement);
}
console.log('Find Methods');
console.log(arr.find(x => x>3)); // Finds the first element which fulfils the condition
console.log(arr.findIndex(x => x>3)); // Finds the Index of the first element which fulfils the condition

// Spread Operator -- Cool
const arr2 = [1,2,3,4,5,6,7,8];
const arr3 = [1,2,3,4,5,6,7,8];
function addNumbers(a,b,c,d,e){
    return a+b+c+d+e;
}

console.log(addNumbers(...arr2));

const bigArray = [...arr2, ...arr3, 56];
console.log(bigArray);

// Passing any number of arguements to a function
// ES5
function unlimitedArguments(){
    console.log(arguments);
}
unlimitedArguments(2,3,5,8,9,4);

// ES6
function unlimitedArguments6(...nums){
    console.log(nums);
}

unlimitedArguments6(2,3,5,8,9,4);

// Default Parameters
function defaultParameters(a, b=3, c){
    return a+b+c;
}

console.log(defaultParameters(2,3,4));
console.log(defaultParameters(2,4));
console.log(defaultParameters(2));