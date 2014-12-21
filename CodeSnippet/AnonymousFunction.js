/**
 * Created by prrathore on 12/11/14.
 */

//Call Anonymous function by putting () at the end of anonymous function to self-execute it immediately
(function() {
    var x  = 5;
    var y = 10;
    z = 3; //global variable as it's not declared
    console.log(x + " " + y);
})();

(function() {
    console.log("z: " + z); //accessing the global variable z
})();


(function(a, b) {
    console.log("Sum of a + b = " + (a + b));
})(5, 7);