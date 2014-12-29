/**
 * This program will do deep comparison of objects and ind out if two objects are deep equal or not.
 *
 * Created by Prabhash Rathore on 12/9/14.
 */

var obj1 = {
//    name : {
//        firstName : 'Ricky',
//        lastName : "Rathore"
//    },
    age : 29,
    city : 'San Jose',
    state : 'CA',
    country : 'US'
};

var obj2 = {
//    name : {
//        firstName : 'Ricky',
//        lastName : "Rathore"
//    },
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

// Function for deep comparison of nested objects
(function deepComparator() {

    if(obj1 === undefined || obj2 === undefined) {
        throw "One of your objects is undefined, can't process with deep comparison!!";
    }

    var flag = true;

    for(var member in obj1) {
        console.log("In obj1: member = " + member + " :: obj1[member] = " + obj1[member]);
        console.log("In obj2: obj2[member] = " + obj2[member]);

        if(obj1[member] !== obj2[member]) {
            flag = false;
            break;
        }

    }

    if(flag) {
        console.log("Obj1 is deep equal to Obj2");
    } else {
        console.log("Obj1 is not deep equal to Obj2");
    }


})();

//function to print all the member elements of an object
function printMembers(obj) {

    if(obj === undefined) {
        throw "Undefined object, please provide a valid object!!";
    }

    for(var x in obj) {
        console.log(x + " => " + obj[x]);
    }

}

console.log("\nAll object members:");
printMembers(obj1);
