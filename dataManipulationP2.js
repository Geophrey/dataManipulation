let tripDist = 1500;
let fuelbudget = 175;
let avrFuelCost = 3;

let hoursToFinish = 0;
let gallonsForTrip = 0;

let mph = 55;
let mpg = 30;

console.log("at "+mph+" miles per hour we have "+mpg+" miles per gallon")

gallonsForTrip = tripDist / mpg;

console.log("for a "+gallonsForTrip+" miles trip it will take "+hoursToFinish+" gallons to complete")

hoursToFinish = tripDist / mph;

console.log("at "+mph+" miles per hour it will take "+hoursToFinish+" to complete the trip")