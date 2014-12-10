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

//constructor for Animal
function Animal(type, color) {
    this.type = type,
    this.color = color,
    this.toString = function() {
        return this.type + " " + this.color;
    }
};

Animal.prototype.equals = function(obj) {
    var self = this;

    console.log("obj === self: " + obj === self);

    if(self.type == obj.type && obj.color == self.color) {
        return true;
    } else {
        return false;
    }

}

Animal.prototype.toString = function() {
    return this.type + " " + this.color;
}

//var animal1 = Object.create(Animal.prototype);
//var animal2 = Object.create(Animal.prototype);

//var animal1 = Object.create();
//var animal2 = Object.create();

//console.log("Prototype of animal1: " + typeof Animal);

//console.log("animal1: " + animal1);
//console.log("animal2: " + animal2);


