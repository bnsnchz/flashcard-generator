var cardArr = require("./questions.js");
var clozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");
var counter = 0;


function basicFlash(){
    if (counter < cardArr.length){
    console.log("Card "+(counter+1));
    console.log("Front: "+cardArr[counter].frontCard);
    
    
    setTimeout(function(){
        console.log("Back: "+cardArr[counter].backCard);
    console.log("-----------------------------");
        counter++
        setTimeout(function(){basicFlash();},3000);
    },3000);
    
    }
    else{
        return;
    }
}

basicFlash();
