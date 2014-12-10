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
console.log("obj1 == obj2 => " + obj1 == obj2); //false
console.log("obj1 === obj2 => " + obj1 === obj2); //false
