/**
 * Create Object using Prototypes.
 *
 * Created by prrathore on 12/10/14.
 */

//constructor for Animal
function Animal(type, color) {
    this.type = type,
    this.color = color
};

console.log("Animal Object: " + typeof Animal + " => " + Animal);
console.log("Prototype value: " + typeof Animal.prototype + " => " + Animal.prototype + " :: " + JSON.stringify(Animal.prototype));

var animal1 = Object.create(Animal.prototype);
//var animal2 = Object.create(Animal.prototype);

//var animal1 = Object.create();
//var animal2 = Object.create();

console.log("animal1: " + animal1);
//console.log("animal2: " + animal2);



