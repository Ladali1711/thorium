function printDate(){
    console.log("Today is 21st")
}
function printMonth(){
    console.log("and the month is February")
}
function getBatchInfo(){
    console.log("Thorium, W3D1, he topic for today is Nodejs module system")
}

module.exports.date = printDate;
module.exports.Month = printMonth;
module.exports.batchInfo = getBatchInfo;