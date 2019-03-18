// Code your solution in this file!
const hqBlock=42;

function distanceFromHqInBlocks(block) {
return Math.abs(block-hqBlock);
}
function distanceFromHqInFeet(feet) {
  return distanceFromHqInBlocks(feet)*264;
}
function distanceTravelledInFeet(a,b) {
  return Math.abs(a-b)*264;
}
function calculatesFarePrice(start,destination) {
  var distance = distanceTravelledInFeet(start,destination)
  if (distance===0) {
    return 'gives customers a free sample'
  }
 else if (distance=>2000) {
    return 'charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)'
  }
  else if (distance>=2500) {
    return 'charges 25 dollars for a distance over 2000 feet'
  }
  else {
    return 'cannot travel that far'
  }
}