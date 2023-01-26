var Kahoot = require('kahoot.js-updated');
var client = new Kahoot;
var config = require("./config.json")
var NameGenerator = require('nodejs-randomnames');
var randomName = NameGenerator.getRandomName();
var randomnumber = Math.round(Math.random() * 3);

console.log("Joining kahoot...  ");
client.join(config.gamePin, randomName);
client.on("joined", () => {
    console.log("I joined the Kahoot!");
});
client.on("questionStart", question => {
    console.log("A new question has started, answering a random answer");
    randomnumber = Math.floor(Math.random() * 3);
    question.answer(randomnumber);
});
client.on("quizEnd", () => {
    console.log("The quiz has ended.");
});
