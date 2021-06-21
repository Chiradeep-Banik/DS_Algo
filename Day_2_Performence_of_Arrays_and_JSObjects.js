/*
For objects -- the runtime are faster like ----- Objects are unordered
    - insertion - O(1)
    - retriving - O(1)
    - removing - O(1)
    - searching - O(n)
*/

var student = {
    name: "banik",
    age: 13,
    married: false
};

Object.keys(student);
Object.values(student);

/*
Array -- are ordered
    - Retriving - O(1)
    - Searching - O(n)
    - Insertion - Depends 
            -- To the begining - O(n)
            -- To the end - O(1)
    - Removing - Depends
            -- To the begining - O(n)
            -- To the end - O(1)
*/

var name = [1,3,2];
console.log(name);
name.sort();
console.log(name);
