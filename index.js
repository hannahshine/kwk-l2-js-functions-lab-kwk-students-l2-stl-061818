// Code your solution in this file!
function distanceFromHqInBlocks(input){
  let block=input;
  blockNumber=Math.abs(input - 42);
  return blockNumber;
}

function distanceFromHqInFeet(someValue){
  let block=someValue;
  distance=Math.abs(someValue-42) *264;
  return distance;
}
function distanceTravelledInFeet(input1,input2){
  let block1=input1;
  let block2=input2;
  betweenBlocks=Math.abs(input1-input2)*264;
  return betweenBlocks;  
}

function calculatesFarePrice(input1,input2){
     let cost;
     calculatedFeet=distanceTravelledInFeet(input1,input2)
       if (calculatedFeet<=400){
       cost=0;}
       else if (calculatedFeet>400 && calculatedFeet<=2000){
       cost=.02 * Math.abs(csalculatedFeet-400)}
       else if (calculatedFeet>2000 && calculatedFeet<2500){
       cost=25;}
       else if (calculatedFeet>2500){
         return "cannot travel that far";
       }
    return cost;
  }
