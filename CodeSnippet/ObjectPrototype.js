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
console.log("Prototype of Animal: " + Object.getPrototypeOf(Animal));

var animal1 = Object.create(Animal.prototype);
console.log("animal1: " + animal1);
console.log("Prototype of animal1: " + Object.getPrototypeOf(animal1));


var animal2 = new Animal(); //this is same as Object.create(Animal.prototype)
console.log("animal2: " + animal2);
console.log("Prototype of animal2: " + Object.getPrototypeOf(animal2));

//Use prototype to add properties to all the objects created from same function
Animal.prototype.size = "medium"; //this property would be accessible to all objects created using Animal constructor

console.log("animal1 type: " + animal1.size);
console.log("animal2 type: " + animal2.size);

