/**
 * Operations based on Array.
 *
 * Created by prrathore on 2/3/15.
 */

//slice method - returns a shallow copy of an array into a new array object
//new array is from including start index and exclduing last index
var slicedArray = [4, 2, 6, 9, 1, 81, 3, 28].slice(2, 5);
console.log("Sliced Array: " + slicedArray);

//concatenation
var alpha = ['a', 'b', 'c'],
    numeric = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // Result: ['a', 'b', 'c', 1, 2, 3]

//Sorting
var fruit = ['apples', 'bananas', 'Cherries'];
fruit.sort(function(a, b) {
    return a - b;
}); // ['Cherries', 'apples', 'bananas'];

var scores = [1, 2, 10, 21];
scores.sort(function(a, b) {
    return a - b;
}); // [1, 10, 2, 21]

var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(function(a, b) {
    return a - b;
}); // ['1 Word', '2 Words', 'Word', 'word']

console.log(fruit);
console.log(scores);
console.log(things);

//foreach
var a = [7, 2, 9, 5].forEach(function(element, index, array) {
    console.log('a[' + index + '] = ' + element);
});

//iterate through given array of objects and based on the condition create two arrays
//sample code to solve real project problem where I have split a result into two arrays based on certain conditions and also each
//object needs to have certain values mapped before pushing to relevant target arrays
var inputArray = [
    {name: 'a', status: 'pending'},
    {name: 'b', status: 'completed'},
    {name: 'c', status: 'pending'},
    {name: 'd', status: 'completed'},
    {name: 'e', status: 'pending'},
    {name: 'f', status: 'completed'},
    {name: 'g', status: 'pending'},
    {name: 'h', status: 'completed'},
    {name: 'i', status: 'completed'},
    {name: 'j', status: 'completed'}
];

var pendingArray = [],
    completedArray = [];

inputArray.map(function(obj) {

    var mappedObject = {};

    mappedObject[obj.name] = obj.status;

    if(obj.status === 'pending') {
        pendingArray.push(mappedObject);
    } else {
        completedArray.push(mappedObject);
    }

});

//Print final arrays
console.log("Input Array:");
printArrayElements(inputArray);

//Print pending state arrays
console.log("Pending State Array:");
printArrayElements(pendingArray);

//Print completed state arrays
console.log("Completed State Array:");
printArrayElements(completedArray);

function printArrayElements(list) {
    for(var i = 0; i < list.length; i++) {
        console.log(JSON.stringify(list[i]));
    }
}

