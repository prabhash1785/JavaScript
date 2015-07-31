/**
 * Created by prrathore on 7/30/15.
 */

'use strict';

function test(s, t) {

    var a = typeof s;
    var b = typeof t;

    if(s) {
        console.log('first check');
    }

    if(s !== undefined) {
        console.log('second check');
    }

    var l = s.length;
    console.log('length of s: ' + l);

    var x;
    console.log('x: ' + x);

}

var a = 'xyz';
var b = 'xyz';

var c = typeof b;
console.log('type of b: ' + c);

test(a, b);
