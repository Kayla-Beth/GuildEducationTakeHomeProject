function getAmountOfFood (smallDogs, mediumDogs, largeDogs, leftoverFood){
    if (smallDogs < 0 || mediumDogs < 0 || largeDogs < 0 || leftoverFood < 0){
      return"Are you sure your dogs or food is negative?";
    }
    if (smallDogs == null || mediumDogs == null || largeDogs == null || leftoverFood == null){
      return"Bad input. Dogs or food can't be null";
    }
    if (!Number.isInteger(smallDogs) || !Number.isInteger(mediumDogs) || !Number.isInteger(largeDogs)){
      return"Bad input. Dogs must be whole."
    }
    var minimumAmountNeeded  = ((smallDogs * 10) + (mediumDogs * 20) + (largeDogs * 30)) - leftoverFood;
    if (minimumAmountNeeded < 0){
      return 0;
    }
    return minimumAmountNeeded * 1.2;
  }

console.log({ StandardCase: getAmountOfFood(5, 3, 7, 17.5) })

  module.exports = getAmountOfFood;
