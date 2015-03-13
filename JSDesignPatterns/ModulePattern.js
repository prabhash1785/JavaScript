/**
 * Module pattern is helps implement Object Oriented concepts like encapsulation. It allows you to create private members
 * which are not visible to external world and also expose members by making them public.
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
