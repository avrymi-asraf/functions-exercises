//Question 1
function myReverse(str) {
  let result = "";
  for (let letter = str.length - 1; letter >= 0; letter--) {
    result += str[letter];
  }
  return result;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  for (let letter = 0; letter < str.length; letter++) {
    for (let d = str.length; letter < d; d--) {
      combinations.push(str.slice(letter, d));
    }
  }

  return combinations;
}

//Question 3
function allCaps(str) {
  // your code here
  return "";
}

//Question 4
function myPower(x, n) {
  // your code here
  return "";
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  return "";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
