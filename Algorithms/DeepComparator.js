/**
 * This function will be used to deep comparison of n-level nested objects
 *
 * Created by prrathore on 1/7/15.
 */

var nestedObj1 = {
    name : {
        firstName : 'Ricky',
        lastName : "Rathore",
        parents : {
            father : {
                a : 'a',
                b : 'b'
            },
            mother : "Emmy"
        }
    },
    age : 29,
    city : 'San Jose',
    state : 'CA',
    country : 'US'
}

var nestedObj2 = {
    name : {
        firstName : 'Amber',
        lastName : "Green-Rathore",
        parents : {
            father : {
                a : 'a',
                b : 'b'
            },
            mother : "Barb"
        }
    },
    age : 29,
    city : 'San Jose',
    state : 'CA',
    country : 'US'
}

//this is a list of objects which will store keys and value of all object attributes
var objectMap = [];

function flattenObjectHelper(obj, path, objectMap) {

    if(obj === undefined) {
        console.log("Undefined object encountered!");
        //objectMap.push(tempObj); //push tempObj to array for final response
        return;
    }

    for(var x in obj) {

        if(dataType === 'function') {
            var exception = "these are data objects, functions not allowed in data objects";
            console.log(exception);
            throw exception;
        }

        if(Array.isArray(obj[x])) {
            console.log("Array type encountered, exiting the loop");
            break;
        }

        var dataType = typeof obj[x];

        if(dataType === 'object') {
            console.log("Object type encountered!!");

            path.push(x);
            objectMap = flattenObjectHelper(obj[x], path, objectMap); //recursive function call for nested objects

            //pop last path element from array if there are no embedded objects
            var hasEmbeddedObject = false;
            for(var t in obj) {
                if(typeof t === 'object') {
                    hasEmbeddedObject = true;
                    return hasEmbeddedObject;
                }
            }

            if(!hasEmbeddedObject) {
                path.pop();
            }

        }

        var fullyQualifiedName;

        var tempObj = {}; //temporary object to store key-value object key value pairs for pushing it to final array

        //create qualified names from elements stored in path array
        if(path.length > 0) {
            var objectPath = path[0];
            for(var p = 1; p < path.length; p++) {
                objectPath += '.' + path[p];
            }

            if(obj[x] !== 'object') {
                fullyQualifiedName = objectPath + '.' + x;
                console.log("Fully Qualified Path of element is: " + fullyQualifiedName);
                tempObj.key = fullyQualifiedName;
            }
        }



        //print the element if it's not an object
        if(typeof obj[x] !== 'object') {
            console.log(x + " => " + obj[x]);
            tempObj.value = obj[x];

            if(tempObj.key === undefined) {
                tempObj.key = x;
            }

            objectMap.push(tempObj); //push tempObj to array for final response

        }

    }

    return objectMap;

}

function flattenObject(sourceObj, flattenArray) {
    return flattenObjectHelper(sourceObj, [], flattenArray);
}

console.log("\nAll object members:");
var list = flattenObject(nestedObj1, []);

console.log("\n\n\====== First set of Object Key-Value pairs:");
for(var i = 0; i < list.length; i++) {
    console.log(list[i].key + " :: " + list[i].value);
}

var list2 = flattenObject(nestedObj2, []);

console.log("\n\n\====== Second set of Object Key-Value pairs:");
for(var i = 0; i < list2.length; i++) {
    console.log(list2[i].key + " :: " + list2[i].value);
}