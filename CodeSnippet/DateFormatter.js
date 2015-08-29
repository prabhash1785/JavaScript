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

//Date Manipulation using MomentJS API
var moment = require('../node_modules/moment');

var presentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log('Present Date: ' + presentDate);

var formattedDate = moment('12-25-1995', 'MM-DD-YYYY').format('MMM DD');
console.log('Formatted Date: ' + formattedDate); //Prints Dec 25

/**
 * Get first date of current month.
 *
 */
function getFirstDateOfCurrentMonth() {

    var currentDate = moment();

    console.log('Current Moment Date: ' + currentDate); // 1440832576427
    console.log('Current ISO Date: ' + currentDate.toISOString()); // 2015-08-29T07:13:13.284Z --> This is the expected ISO date format

    var firstDate = currentDate.date(1);

    console.log('First Moment Data: ' + firstDate); // 1440832576427
    console.log('First ISO Date: ' + firstDate.toISOString()); // 2015-08-29T07:13:13.284Z --> This is the expected ISO date format

}

getFirstDateOfCurrentMonth();







