/**
 * This program will check how == vs === works for different kind of objects in Javascript.
 *
 * Created by Prabhash Rathore on 12/9/14.
 */

var obj1 = {
//    name : {
//        firstName : 'Ricky',
//        lastName : 'Rathore'
//    },
    age : 29,
    city : 'San Jose',
    state : 'CA',
    country : 'US'
};

var obj2 = {
//    name : {
//        firstName : 'Ricky',
//        lastName : 'Rathore'
//    },
    age : 29,
    city : 'San Jose',
    state : 'CA',
    country : 'US'
};

var equals = function(obj) {
    console.log("this: " + this);
    console.log("obj: " + obj);

    for(var x in this) {
        console.log("x = " + x + " ==> " + typeof x);
        console.log("this[x] = " + this[x] + " ::: obj[x] = " + obj[x]);
        if(this[x] !== obj[x]) {
            return false;
        }
    }

    return true;
}

obj1.equals = equals;
obj2.equals = equals;

//check equality of objects using different techniques
// == uses data type coercion before doing the comparison which slows down the comparison and can produce unpredictable results.
// === is preferred over ==
console.log("obj1 == obj2 => " + obj1 == obj2); //false
console.log("obj1 === obj2 => " + obj1 === obj2); //false
console.log("JSON stringify check: " + JSON.stringify(obj1) === JSON.stringify(obj2)); //false, JSON.stringify equality works for JSON style objects

//using custom equals
console.log("Custom Equals Check: " + obj1.equals(obj2));







































