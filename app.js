var cardArr = require("./questions.js");
var clozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");
var counter = 0;

inquirer.prompt([
    {
        type:"list",
        name:"menu",
        message:"What kind of game would you like to play?",
        choices:["Basic","Cloze"],
    }
    ]).then(response=>{

    if(response.menu === "Basic"){
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
    }

    if(response.menu === "Cloze"){
        console.log("Comming Soon!");
    }

    });
