var moment = require('moment');

console.log(moment().format());

// 12 June 2016

var now = moment();
console.log(now.unix());

var ts = 1465754624;
var currMoment = moment.unix(ts);
console.log('Current Moment', currMoment.format('MMMM D, YY @ h:mm a'));


// January 3rd, 2016 @ 12:13 AM
console.log('Current Moment', currMoment.format('MMMM Do, YYYY @ h:mm A'));
