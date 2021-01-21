//Question 1
function myReverse(str) {
  let result = "";
  for (let letter = str.length - 1; letter >= 0; letter--) {
    result += str[letter];
  }
  return result;
}
console.log("myReverse \n input:Nitzan \n output: " + myReverse("Nitzan"));

//Question 2
function allCombinations(str) {
  let combinations = [];
  for (let letter = 0; letter <= str.length; letter++) {
    for (let d = letter + 1; str.length >= d; d++) {
      combinations.push(str.slice(letter, d));
    }
  }

  return combinations;
}
console.log(
  "allCombinations \n input:dog \n output: " + allCombinations("dog")
);

//Question 3
function allCaps(str) {
  let sentence = str.split(" ");
  for (let word in sentence) {
    sentence[word] = sentence[word][0].toUpperCase() + sentence[word].slice(1);
  }

  sentence = sentence.join(" ");
  return sentence;
}
console.log(
  "allCaps \n input:i am a cyber4s student \n output " +
    allCaps("i am a cyber4s student")
);
//Question 4
function myPower(x, n) {
  let sum = x;
  for (let i = 1; i < n; i++) {
    sum *= x;
  }
  return sum;
}
console.log("myPower  input:(2,6) \n output " + myPower(2, 6));

//Question 5
function getFirstNotRepeating(str) {
  let count = new Object();
  for (letter of str) {
    if (!count.hasOwnProperty(letter)) {
      count[letter] = 1;
    } else {
      count[letter] += 1;
    }
  }
  for (letter of str) {
    if (count[letter] == 1) {
      return letter;
    }
  }
}

console.log(
  "getFirstNotRepeating \n input:abanibiabohebe \n output " +
    getFirstNotRepeating("abanibiabohebe")
);

//Question 6 (Bonus)
function isPrefectNumber(num) {
  let sumDvisors = 1;
  for (let i = num - 1; i > 1; --i) {
    if (num % i === 0) {
      sumDvisors += i;
    }
  }
  return sumDvisors === num;
}
console.log("isPrefectNumber \n input:496\n output " + isPrefectNumber(496));
console.log("input:7 \n output " + isPrefectNumber(7));
