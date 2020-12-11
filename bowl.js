var userscore = 0;
var computerscore = 0;
var batting = document.getElementById("bat");
var bowling = document.getElementById("bowl");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var usernamescore= document.querySelector(".userscore");
var computerscore11= document.querySelector(".computerscore");
var options = document.querySelector(".options");


function computer()
{
var choice = ["1","2","3","4","5","6"];
var random = Math.floor(Math.random() * 6); 
    return choice[random];
}

if (batting.addEventListener) {
    bat();
} else if (bowling.attachEvent) {
    userbowl();
}

/* batting.addEventListener('click',function(){
    bat();
    console.log("Right now you are batting");
}) */

function bat(){
one.addEventListener('click',function(){
    batgame("1");
    console.log("pressed button 1");
})

two.addEventListener('click',function(){
    batgame("2");
    console.log("pressed button 2");
})

three.addEventListener('click',function(){
    batgame("3");
    console.log("pressed button 3");
})
    
four.addEventListener('click',function(){
    batgame("4");
})
    
five.addEventListener('click',function(){
    batgame("5");
})
    
six.addEventListener('click',function(){
    batgame("6");
})
}

function batgame(userchoice)
{   
    console.log("Batting user scores  " +userchoice);
    
    var computerchoice = computer();
    console.log("Batting computer scores " +computerchoice);
    switch( userchoice + computerchoice)
        {
                case "12":
                case "13":
                case "14":
                case "15":
                case "16":
                run( userchoice , computerchoice);
                break;
                case "21":
                case "23":
                case "24":
                case "25":
                case "26":
                run( userchoice , computerchoice);
                break;
                case "31":
                case "32":
                case "34":
                case "35":
                case "36":
                run( userchoice , computerchoice);
                break;
                case "41":
                case "42":
                case "43":
                case "45":
                case "46":
                run( userchoice , computerchoice);
                break;
                case "51":
                case "52":
                case "53":
                case "54":
                case "56":
                run( userchoice , computerchoice);
                break;
                case "61":
                case "62":
                case "63":
                case "64":
                case "65":
                run( userchoice , computerchoice);
                break;
                case "11":
                case "22":
                case "33":
                case "44":
                case "55":
                case "66":
                out( userchoice , computerchoice);
                break;
        }
}

function run(userchoice, computerchoice)
{   
    var run = parseInt(userchoice);
    userscore = userscore + run;
    options.innerHTML = "User choose the number " + userchoice + " and computer choose the number " + computerchoice;
    return userscore;
}

function out(userchoice,computerchoice)
{
    var userscore = run(userchoice,computerchoice);
    console.log("out");
    var runout = parseInt(userchoice);
    var score = userscore - runout;
    console.log(score);
    usernamescore.innerHTML = score;
    options.innerHTML = "User finally score is " + score;
    removeHandler();
    return score;
}

function removeHandler() {
    batting.removeEventListener("mousemove", bat);
}

////////////////////////////////////////////////////////////////////



/* bowling.addEventListener('click',function(){
    console.log("Right now you are bowling");
    userbowl();
}) */ 

function userbowl(){
one.addEventListener('click',function(){
    bowlgame("1");
    console.log("pressed button 1");
})

two.addEventListener('click',function(){
    bowlgame("2");
    console.log("pressed button 2");
})

three.addEventListener('click',function(){
    bowlgame("3");
    console.log("pressed button 3");
})
    
four.addEventListener('click',function(){
    bowlgame("4");
})
    
five.addEventListener('click',function(){
    bowlgame("5");
})
    
six.addEventListener('click',function(){
    bowlgame("6");
})
}

function bowlgame(userchoice)
{   
    console.log("Bowling user scores  " +userchoice);
    var computerchoice = computer();
    console.log("Bowling computer scores" +computerchoice);
    switch( userchoice + computerchoice)
        {
                case "12":
                case "13":
                case "14":
                case "15":
                case "16":
                bowl( userchoice , computerchoice);
                break;
                case "21":
                case "23":
                case "24":
                case "25":
                case "26":
                bowl( userchoice , computerchoice);
                break;
                case "31":
                case "32":
                case "34":
                case "35":
                case "36":
                bowl( userchoice , computerchoice);
                break;
                case "41":
                case "42":
                case "43":
                case "45":
                case "46":
                bowl( userchoice , computerchoice);
                break;
                case "51":
                case "52":
                case "53":
                case "54":
                case "56":
                bowl( userchoice , computerchoice);
                break;
                case "61":
                case "62":
                case "63":
                case "64":
                case "65":
                bowl( userchoice , computerchoice);
                break;
                case "11":
                case "22":
                case "33":
                case "44":
                case "55":
                case "66":
                computerout( userchoice , computerchoice);
                break;
        }
}

function bowl(userchoice, computerchoice)
{   
    var run = parseInt(computerchoice);
    computerscore = computerscore + run;
    options.innerHTML = "Computer choose the number " + computerchoice + " and user choose the number " + userchoice;
    return computerscore;
}

function computerout(userchoice,computerchoice)
{
    var computerscore = bowl(userchoice,computerchoice);
    console.log("out");
    var runout = parseInt(computerchoice);
    var score = computerscore - runout;
    console.log(score);
    computerscore11.innerHTML = score;
    options.innerHTML = "Computer finally score is " + score;
    return score;
}