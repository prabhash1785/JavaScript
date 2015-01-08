/**
 * This function will be used to deep comparison of n-level nested objects
 *
 * Created by prrathore on 1/7/15.
 */

//code to test deep equality of objects using above functions
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
        firstName : 'Ricky',
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

var nestedObj3 = {
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

var list1 = flattenObject(nestedObj1, []);

console.log("\n\n\First Flattened object:");
for(var i = 0; i < list1.length; i++) {
    console.log(list1[i].key + " :: " + list1[i].value);
}

var list2 = flattenObject(nestedObj3, []);

console.log("\n\n\Second flattened object:");
for(var i = 0; i < list2.length; i++) {
    console.log(list2[i].key + " :: " + list2[i].value);
}

//function to compare flattened objects
function compareFlattenedArray(list1, list2) {
    if(list1 === undefined) {
        throw "Can't proceed comparison with undefined objects";
    }

    if(list2 === undefined) {
        throw "Can't proceed comparison with undefined objects";
    }

    var keyList = [];
    var valueList = [];

    //explode the object from list2 and store them in 2 separate arrays.
    // one containing key and other containing value.
    // this is done to do easy comparison of list1 to list2 objects.
    for(var x in list2) {
        keyList.push(list2[x].key);
        valueList.push(list2[x].value);
    }

    var keyFound = false;

    for(var m in list1) {

        keyFound = false;

        for(var i = 0; i < keyList.length; i++) {
            if(list1[m].key === keyList[i]) {
                console.log("key matched... " + list1[m].key);

                if(list1[m].value === valueList[i]) {
                    console.log("Value matched... " + list1[m].value);
                    keyFound = true;
                }

            }

            if(keyFound) {
                break;
            }

        }

        if(!keyFound) {
            break;
        }

    }

    return keyFound;

}

var equalityCheck = compareFlattenedArray(list1, list2);

if(equalityCheck) {
    console.log("Objects are Deep Equal!!");
} else {
    console.log("Objects are not Deep Equal!!");
}

function flattenObject(sourceObj, flattenArray) {
    return flattenObjectHelper(sourceObj, [], flattenArray);
}
