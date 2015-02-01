/**
 * This will depict how to create objects using function and built-in JS objects
 *
 * Created by prrathore on 1/31/15.
 */

'use strict';

function Person(firstName, lastName) {
    var person = {};

    person.firstName = firstName;
    person.lastName = lastName;

    return person;

}

var person1 = new Person('Foo', 'Bar');
var person2 = new Person('Prabhash', 'Rathore');


console.log(person1);
console.log(person2);

//create object using Object Literal
//this is used to create Singleton Objects, can't create new Objects. To create new objects, use function.
var animal = {
    breed: 'Dog',
    color: 'Yellow'
};

//var animal1 = new animal(); //can't call new on Object Literal as it's not a function and can't be used to create objects
//var animal1 = Object.create(animal.prototype); //invalid, results in exception saying object prototype many only be an object or null
console.log(animal);

animal.breed = 'Lion';
animal.weight = 70;

var animal2 = animal;
animal2.size = 'medium'; //animal and animal2 object points to same reference

console.log(animal); //{ breed: 'Lion', color: 'Yellow', weight: 70, size: 'medium' }