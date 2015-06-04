/**
 * Program to profile declaration of a var inside a big for loop comparared to it being declared outside
 *
 * Created by prrathore on 6/4/15.
 */

'use strict';

function createObjInForLoop() {

    var startTime = Date.now();
    var obj;

    for(var i = 0; i < 1000000; i++) {

        obj = {};

        obj.id = i;
        obj.value = 'value :: ' + i;

    }

    var endTime = Date.now();

    var timeTaken = endTime - startTime;
    console.log('Time taken: ' + timeTaken); //146

}

createObjInForLoop();