/**
 * Created by prrathore on 3/31/15.
 */

function arrayOperation() {
    var list = [23, 'Apple', {key1: 'value1', 'key2': 'value2'}];

    list.push("Microsoft");

    for(var v in list) {
        if(typeof v === 'object') {
            console.log(v + " :: " + list[v].stringify());
            return;
        }
        console.log(v + " :: " + list[v]);
    }

};

arrayOperation();