/**
 * Created by prrathore on 6/2/15.
 */

'use strict';

/**
 * Format date
 *
 */
function formatDate() {

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

}

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

// getFirstDateOfCurrentMonth();

/**
 * Date manipultaion with griffin
 *
 */
(function getDateWithGriffin() {

    var griffinModule = require('griffin');
    var metadata = require('g11n-metadata');
    var griffinDateModule = griffinModule.useFeature('date').useMetadata(metadata);

    var currentDate = new Date(); // this gives local time in
    console.log('currentDate: ' + currentDate); // Mon Aug 31 2015 12:08:02 GMT-0700 (PDT)

    var griffin = griffinDateModule.createHandler('en-US', 'US');

    var griffinNormalizedDate = griffin.normalizeDate(currentDate); //it's same as new Date()
    console.log('Griffin Normalized Date: ' + griffinNormalizedDate); // Mon Aug 31 2015 13:58:55 GMT-0700 (PDT)
    console.log('Griffin Normalized Date in UTC format: ' + griffinNormalizedDate.toUTCString()); // Mon, 31 Aug 2015 21:31:01 GMT

    var d = griffin.formatDate("2014-03-21T07:00:00.000Z");
    console.log('d: ' + d);

    var griffinformattedUSTime = griffin.formatDateWithPattern(currentDate, griffin.DATE_FORMAT_UTC);
    console.log('US formatted time: ' + griffinformattedUSTime); // 2015-08-31T20:58:55Z

    var e = griffin.formatDate(griffinformattedUSTime);
    console.log('e: ' + e);

    //var griffinformattedUSTime2 = griffin.formatDate({
    //    date: moment(),
    //    timeZone: 'America/Los_Angeles'
    //}, 'yyyy-MM-ddT23:59:59.999Z'); // Not able to format date error
    //console.log('US formatted time: ' + griffinformattedUSTime2);
    //
    //var griffinFR = griffinDateModule.createHandler('fr-FR', 'FR');
    //var griffinFRNormalizedDate = griffinFR.normalizeDate(currentDate);
    //console.log('Griffin FR Normalized Date: ' + griffinFRNormalizedDate); // 2015-08-31T19:08:02.414Z
    //
    //var formattedFRDate = griffinFR.formatDateWithPattern(currentDate, 'yyyy-MM-ddT23:59:59.999Z');
    //console.log('Formated french date: ' + formattedFRDate);
    //
    //var currentMomentDate = moment();
    //console.log('Current Moment Date: ' + currentMomentDate);
    //console.log('Current Moment Date as ISO String: ' + currentDate.toISOString()); // 2015-08-31T19:08:02.414Z

})();







