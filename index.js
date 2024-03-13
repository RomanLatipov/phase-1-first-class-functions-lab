function returnFirstTwoDrivers(arr) {
    const newArr = [arr[0], arr[1]];
    return newArr;
}
function returnLastTwoDrivers(arr) {
    const newArr = [arr[arr.length-2], arr[arr.length-1]];
    return newArr;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(i) {
    const fareMultiplier = fare => fare * i;
    return fareMultiplier;
}
function fareDoubler(fare) {
    const newFare = createFareMultiplier(2)(fare);
    return newFare;
}
function fareTripler(fare) {
    const newFare = createFareMultiplier(3)(fare);
    return newFare;
}
function selectDifferentDrivers(arrayOfDrivers, fun) {
    return fun(arrayOfDrivers);
}