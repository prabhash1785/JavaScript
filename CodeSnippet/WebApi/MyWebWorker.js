/**
 * This is a web worker which will run in the backgorund to get stuff done.
 *
 * Created by prrathore on 6/16/15.
 */

var onmessage = function(text) {
    console.log("I am web worker, received your message: " + text);
    postMessage("Chicago");
}
