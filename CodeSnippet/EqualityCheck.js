/**
 * This program will check how == vs === works for different kind of objects in Javascript.
 *
 * Created by Prabhash Rathore on 12/9/14.
 */

var obj1 = {
    name : {
        firstName : 'Ricky',
        lastName : 'Rathore'
    },
    age : 29,
    city : 'San Jose',
    state : 'CA',
    country : 'US'
};

var obj2 = {
    name : {
        firstName : 'Ricky',
        lastName : 'Rathore'
    },
    age : 29,
    city : 'San Jose',
    state : 'CA',
    country : 'US'
};

//check equality of objects using different techniques
console.log("obj1 == obj2 => " + obj1 == obj2); //false
console.log("obj1 === obj2 => " + obj1 === obj2); //false
console.log("JSON stringify check: " + JSON.stringify(obj1) === JSON.stringify(obj2)); //false, JSON.stringify equality works for JSON style objects







































