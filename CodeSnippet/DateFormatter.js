/**
 * Created by prrathore on 6/2/15.
 */

'use strict';

var inputDate = '2015-05-21T05:02:56.000Z';

// parse it to Unix timestamp
var parsedDate = Date.parse(inputDate);
console.log('Date: ' + parsedDate);

// parse date and retrieve Month and Date
var d = new Date('2015-01-21T05:02:56.000Z');
console.log('Date object: ' + d); // Wed May 20 2015 22:02:56 GMT-0700 (PDT)
console.log('Stringified Date: ' + d.toString());  // Wed May 20 2015 22:02:56 GMT-0700 (PDT)

var dateTokens = d.toString().split(' ');
console.log('Month: ' + dateTokens[1]);
console.log('Date: ' + dateTokens[2]);




