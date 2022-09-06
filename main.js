userName = "Jonathan";

userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

const userQuestion = "Will I adopt a new puppy soon?";

console.log(`${userName} has asked - ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

console.log(randomNumber);

let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
  case 1:
    eightBall = "It is decidedly so";
  case 2:
    eightBall = "Reply hazy try again";
  case 3:
    eightBall = "Cannot predict now";
  case 4:
    eightBall = "Do not count on it";
  case 5:
    eightBall = "My sources say no";
  case 6:
    eightBall = "Outlook not so good";
  case 7:
    eightBall = "Signs point to yes";
}

console.log(`The Magic 8 Ball says, ${eightBall}.`);
