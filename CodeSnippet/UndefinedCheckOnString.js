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

//test(a, b);

function trimString(s) {

    if(!s || s.trim().length === 0) {
        console.log('String is undefined');
        return;
    }

    console.log('String is not undefined:: ' + s);

}

var s = '  sdf  ';
trimString(s);




