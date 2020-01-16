//ES6

function abc(){
    console.log(a); //can't be used here
    var a = 10;
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
    return 2020-el
});

console.log(agesES5);