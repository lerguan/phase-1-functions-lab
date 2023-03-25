// Code your solution in this file!
const streetNumOfHq = 42
function distanceFromHqInBlocks(numOfStreet) {
    return Math.abs(numOfStreet - streetNumOfHq)
}

function distanceFromHqInFeet(numOfStreet) {
    return 264*distanceFromHqInBlocks(numOfStreet);
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start,destination)
    switch(true) {
        case distance <= 400 : return 0;
        case distance > 400 && distance <=2000 : return 0.02 * (distance-400);
        case distance > 2000 && distance <=2500: return 25;
        case distance > 2500: return 'cannot travel that far';
    }
}