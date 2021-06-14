//forgiving language
//syntax simillar to c/c++ 

console.clear(); // this clears the console before running the file

console.log("Hello World"); // logging in the console 

/*
    variables in javascript
    -------------------------
    Dynamically typed-- so no need to specify any type.
    starts with var keyword
*/

var name = "banik",num=13;

console.log(name,num);

/*
    type casting and converting in js
    -----------------------
    string to numbers--
    parseInt()--converts a string to an integer
    parseFloat()-- converts a string to a float
    Number() -- coverts any string to a number
*/

var cast_num = "13.13";
console.log(Number(cast_num)+1);
console.log(parseInt(cast_num)+1);
console.log(parseFloat(cast_num)+1);

// arrays in js-- no need to specify the number of elements

var ar = [1,2,3,true];

for (var i = 0; i <3;i++){ // for loop structure is same as c/c++ only -var- is used 
    console.log(ar[i]);
}

console.log("Length of array = "+ar.length);
ar.pop(); // deletes the last element 
// some other functions are push() reverse() sort() 
console.log("Length of array = "+ar.length);

//strings in js
 
console.log("Length of the string is == "+name.length);
console.log(name[0]);

//objects in js -- it quite similar to dictionary in python -- it stores key and value pairs

var obj = {
    name : "banik",
    age : 13
};

console.log(obj["age"]);
console.log(obj.name);

// functions in js 

function print(a){
    console.log(a);
}

print("Hw");

//if else statements -- same as c/c++

if (obj.age < 10)
    print("Hello");
else
    if(1<2)
        print("1");

// Switch statement in js -- simillar to c/c++

var age = 13;

switch(age){
    case 13 : 
        console.log("Age = "+ age);
        break;
    default:
        console.log("NO age");
        break;
}


// loops are same in js -- c++/a

//while loop
while((age-10)>0){
    console.log("OLe");
    age--;
}
//for loop
for(var i = 0 ; i < 2;i++){
    console.log("OLeee");
}

//do while loop -- executed atleast once
do {
    console.log("OLeeeeeee");
    i++;
}while(i < 10)

//Try and catch statement in js -- suimillar to pyhton

try{                                          
    var ch = 12;                      // try -- used to test a statement
    if (ch > 10)
        throw "Used Throw";           // throw -- allows us to to throw what the error message must be   
}catch(err){
    console.log(err);                 // catch -- takes a parameter err and prints 
}finally{
    console.log("Used try catch");    // finally -- is always run no matter what happens
}

//Classes and objects in js

class student{
    constructor(){
        this.name;                                          //this -- keyword must be used to denote a variable in inside the class
        this.age;
    }
    print_age(){                                            // no need to use function keyword inside a class
        console.log(this.name + " Has age " + this.age);
    }
}

var s1 = new student;

s1.name = "banik";
s1.age =13;

s1.print_age();

// inheritence in js

class new_student extends student{
    constructor(){
        super();
        this.grade;
    }
    print_grade(){
        console.log(this.name + " has grade " + this.grade);
    }
}

var s2 = new new_student;

s2.name = "ch";
s2.age = 20;
s2.grade = 'F';

s2.print_age();
s2.print_grade();


// creating an array using the new keyword

var a2 = new Array();

a2[0] = 12;

console.log(a2[0]);
