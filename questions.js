var basicCard = require("./BasicCard.js");

var questions = [{
    q:"How can you include an external javascript file?", 
    a:"/script src='myfile.js'"},
    {q:"10 % 9 = ?",
    a:"1"},
    {q:"What does the break statement do to a loop?",
    a:"stops it"},
    {q:"what happens if you add a string and a number?",
    a:"the result will be a string"},
    {q:"What are the three kinds of pop up boxes?",
    a:"Alert box, Confirm box, and Prompt box"},
    {q:"What are the two differnt kinds of loops in javascript?",
    a:"for and while"},
    {q:"what does the for loop do?",
    a:"loops through a block of code a specified number of times"},
    {q:"JavaScript can be placed in which parts of an HTML document ?",
    a:"The <head> or the <body> section"},
    {q:"Is JavaScript case sensitive?",
    a:"Yes"},
    {q:"True or False: Variable names can begin with a letter or a number.",
    a:"False"}];

    
cardArr = [];

for(var i = 0; i<questions.length; i++){
    front = questions[i].q;
    back = questions[i].a;
    card = new basicCard(front, back);
    cardArr.push(card);

}

    module.exports = cardArr;