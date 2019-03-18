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
  if (Math.abs(start-destination)===0) {
    return 'gives customers a free sample'
  }
  //if (Math.abs(start-destination)
}