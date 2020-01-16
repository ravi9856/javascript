document.getElementById('btn1').addEventListener('click', function(){
    alert('Clicked me...');
});

// document.querySelector('#btn1').addEventListener('click', function(){
//     alert('Clicked me...');
// });


var Person = function(name, dob, job){
    this.name = name;
    this.dob = dob;
    this.job = job;
    this.calculate_age = function(){
        console.log(2019 - this.dob);
    }
}

Person.prototype.createID = function(){
    console.log(this.name+this.dob);
}

class Person_Class {
    constructor(name, dob, job) {
        this.name = name;
        this.dob = dob;
        this.job = job;
        this.calculate_age = function () {
            console.log(2019 - this.dob);
        };
    }
}

var john = new Person('John', 1989, 'Amazon');

john.calculate_age();
john.createID();


//Closures

function xyz(a1){
    var y = "abc";
    return function(a2){
        console.log(a1 + y + a2);
    }    
}

var x = xyz(10);
x(20);

xyz(5)(6);