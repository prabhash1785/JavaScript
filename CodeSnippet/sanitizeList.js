/**
 * Created by prrathore on 8/28/15.
 */

'use strict';

var sanitize = require('sanitize-caja');

function sanitizeBufIDArr(list) {
    var sanitizedList = [];

    if (list && list.length > 0) {
        list.forEach(function (value) {
            var sanitizedStr = sanitize(value.trim());
            if (sanitizedStr) {
                sanitizedList.push(sanitizedStr);
            }
        });
    }

    return sanitizedList;
}

(function test() {

    var str = '<html></html>';
    var sanitizedStr = sanitize(str);

    console.log(str + ' :::: ' + sanitizedStr);

    var trimmedStr = sanitizedStr.trim();
    console.log(typeof trimmedStr + ' :::: ' + trimmedStr.length);

    var list = [
        str,
        '<script scr="javascript"></script>',
        '<html><script scr="javascript"></script></html>'
    ];

    var sanitizedList = sanitizeBufIDArr(list);

    for (var i = 0; i < sanitizedList.length; i++) {
        console.log(typeof sanitizedList[i] + ' ::: ' + sanitizedList[i].length + ' ::: ' + sanitizedList[i]);
    }

})();

