var utils = require('./fileutils.js');

function main() {
    //Get values from file
    let valueArray = utils.getArrayFromFile('daythfour.txt');
    //Pass values into adder
    let result = getGuardAndTime(valueArray);
    //Print result
    process.stdout.write(result[0] * result[1] + '\n');
}

function getGuardAndTime(inputValues) {
    var result = [];
    var guardResults = {};
    var currentGuard = {};
    var guardIsAsleep = false;
    //For each row
    //parse record
    //switch event type
    //case start
    //end shift of previous guard
    //set current guard
    //case sleep
    //set starting minute
    //case end sleep
    //
    return result;
}


//[1518-01-12 23:57] Guard #3209 begins shift
function parseRecord(record) {

}

function startShift(gevent, gres) {

    return gres;
}

function endShift(gs) {

}

function startSleep(gs) {

}

function endSleep(gs) {

}

function GuardEvent(guardId, minute, type) {
    this.id = guardId;
    this.minute = minute;
    this.type = type;
}

var EventType = {
    START_SHIFT: 0,
    START_SLEEP: 1,
    END_SLEEP: 2
}

function GuardStats(guardId) {
    this.id = guardId;
    //Initialize time array on startup
    this.minutes = [];
    for (var i = 0; i < 60; i++) {
        this.minutes[i] = 0;
    }
}

main();