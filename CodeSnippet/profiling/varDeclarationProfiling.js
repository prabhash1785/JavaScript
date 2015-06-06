/**
 * Program to profile declaration of a var inside a big for loop comparared to it being declared outside
 *
 * Created by prrathore on 6/4/15.
 */

'use strict';

function createObjInForLoopWithVarDeclaredOutside() {

    var startTime = Date.now();
    var obj;

    var targetArray = [];

    for(var i = 0; i < 10000000; i++) {

        obj = {};

        obj.id = i;
        obj.value = 'value :: ' + i;

        targetArray.push(obj);

    }

    var endTime = Date.now();

    var timeTaken = endTime - startTime;
    console.log('Time taken: ' + timeTaken); //for million count 505 - 525 milliseconds, for 10 million count -> 82772

}

function createObjInForLoopWithVarDeclaredInside() {

    var startTime = Date.now();

    var targetArray = [];

    for(var i = 0; i < 10000000; i++) {

        var obj = {};

        obj.id = i;
        obj.value = 'value :: ' + i;

        targetArray.push(obj);

    }

    var endTime = Date.now();

    var timeTaken = endTime - startTime;
    console.log('Time taken: ' + timeTaken); //for million count 486 to 509, for 10 million count -> 81550 milliseconds

}

createObjInForLoopWithVarDeclaredOutside();
//createObjInForLoopWithVarDeclaredInside();