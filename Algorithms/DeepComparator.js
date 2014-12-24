/**
 * This program will do deep comparison of objects and ind out if two objects are deep equal or not.
 *
 * Created by Prabhash Rathore on 12/9/14.
 */

var obj1 = {
    name : {
        firstName : 'Ricky',
        lastName : "Rathore"
    },
    age : 29,
    city : 'San Jose',
    state : 'CA',
    country : 'US'
};

var obj2 = {
    name : {
        firstName : 'Ricky',
        lastName : "Rathore"
    },
    age : 29,
    city : 'San Jose',
    state : 'CA',
    country : 'US'
};

//check equality of objects using different techniques
// === this checks for reference
var result1 = obj1 == obj2;
console.log("obj1 == obj2 => " + result1); //false

var result2 = obj1 === obj2;
console.log("obj1 === obj2 => " + result2); //false

var obj3 = obj1; //now their reference is going to be same
var result3 = obj3 === obj1;
console.log("obj3 === obj1 => " + result3);
