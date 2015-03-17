/**
 * The Module pattern encapsulates "privacy", state and organization using closures. It provides a way of wrapping a
 * mix of public and private methods and variables, protecting pieces from leaking into the global scope and accidentally
 * colliding with another developer's interface. With this pattern, only a public API is returned, keeping everything else
 * within the closure private.
 *
 * Created by prrathore on 3/12/15.
 */

var myModule = (function(color) {
    //private members
    var color = color;
    var resetColor = function() {
        color = "white";
    };

    //public members exposed to outer world
    return {
      resetColor: resetColor,
      printColor: function() {
          console.log("Color is: " + color);
      }
    };
})("red");

myModule.printColor();
myModule.resetColor();
myModule.printColor();

//access private member, will print undefined as it's not visible
console.log("Private data member color: " + myModule.color); //undefined
