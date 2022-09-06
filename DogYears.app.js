//My current age.
const myAge = 25;
//Value saved to this variable will change.
let earlyYears = 2;
earlyYears *= 10.5;
//The first two years of a dog’s life count as 10.5 dog years each.
let laterYears = myAge - 2;
//Each year following equates to 4 dog years.
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;
let myName = "Jonathan".toLowerCase();
//Statement that displays your name and age in dog years.
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
