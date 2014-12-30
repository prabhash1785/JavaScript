/**
 * Typeof checks.
 *
 * Created by prrathore on 12/23/14.
 */

'use strict';

var a = 10;
console.log("typeof a: " + typeof a); //number

var b = 10.56;
console.log("typeof b: " + typeof b); //number

var c = true;
console.log("typeof c: " + typeof c); //boolean

var d = 'Hello';
console.log("typeof d: " + typeof d); //string

var e = ['one, two'];
console.log("typeof e: " + typeof e); //prints object instead of array
var dataType = Array.isArray(e);
console.log("dataType: " + dataType); //prints true as it's an array

var f = {
    one : 1,
    two : 2,
    three : 3
};
console.log("typeof f: " + typeof f); //object

var g = function() {
    console.log("this is a function!")
};
console.log("typeof g: " + typeof g); //function

console.log("typeof NaN: " + typeof NaN);

console.log("typeof null: " + typeof null);

console.log("typeof undefined: " + typeof undefined);
