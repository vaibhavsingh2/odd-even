var batone = document.getElementById("batone");
var battwo = document.getElementById("battwo");
var batthree = document.getElementById("batthree");
var batfour = document.getElementById("batfour");
var batfive = document.getElementById("batfive");
var batsix = document.getElementById("batsix");
var bowlone = document.getElementById("bowlone");
var bowltwo = document.getElementById("bowltwo");
var bowlthree = document.getElementById("bowlthree");
var bowlfour = document.getElementById("bowlfour");
var bowlfive = document.getElementById("bowlfive");
var bowlsix = document.getElementById("bowlsix");
var bat = document.getElementById("bat");
var bowl = document.getElementById("bowl");
var batpic = document.getElementById("batpic");
var bowlpic = document.getElementById("bowlpic");
var userscore = document.getElementById("userscore");
var computerscore = document.getElementById("computerscore");
var userchoice = document.getElementById("userchoice");
var computerchoice = document.getElementById("computerchoice");
var userwins = document.getElementById("userwins");
var computerwins = document.getElementById("computerwins");

var sum = 0;
var bowlsum = 0;

//selecting to bat
 bat.addEventListener("click", function bat(){
    console.log("You choose to bat first");
     console.log("User is batting");
     document.getElementById("bat").style.backgroundColor =  "#e60000";
     batting();
 });


// batting event happens in this function
function batting(){
           
     batone.addEventListener("click", function(){
    batone.style.backgroundColor = "#e60000";
    colorchange();
    console.log("one is pressed");
        var u = 1;
        var c = computer();
        calculation(u,c);        
});
    battwo.addEventListener("click", function(){
    console.log("two is pressed");
    battwo.style.backgroundColor = "#e60000";
    colorchange();    
        var u = 2;
        var c = computer();
       calculation(u,c);
});
    batthree.addEventListener("click", function(){
    console.log("three is pressed");
        batthree.style.backgroundColor = "#e60000";
    colorchange();
        var u = 3;
        var c = computer();
         calculation(u,c);
});
    batfour.addEventListener("click", function(){
    console.log("four is pressed");
        batfour.style.backgroundColor = "#e60000";
    colorchange();
        var u = 4;
        var c = computer();
         calculation(u,c);
});
    batfive.addEventListener("click", function(){
    console.log("five is pressed");
        batfive.style.backgroundColor = "#e60000";
    colorchange();
        var u = 5;
        var c = computer();
         calculation(u,c);
});
    batsix.addEventListener("click", function(){
    console.log("six is pressed");
        batsix.style.backgroundColor = "#e60000";
    colorchange();
        var u = 6;
        var c = computer();
        calculation(u,c);
});       
}
 
//bowling events take place here     
function bowling(batsum){
    
var batsum1 = batsum;    
     console.log("Computer is batting");
    
bowlone.addEventListener("click", function(){
    console.log("one is pressed");
        var bu = 1;
        var c = computer();
        bowlcalculation(bu,c,batsum1);
});
    bowltwo.addEventListener("click", function(){
    console.log("two is pressed");
        var bu = 2;
        var c = computer();
        bowlcalculation(bu,c,batsum1);
});
    bowlthree.addEventListener("click", function(){
    console.log("three is pressed");
        var bu = 3;
        var c = computer();
        bowlcalculation(bu,c,batsum1);
});
    bowlfour.addEventListener("click", function(){
    console.log("four is pressed");
        var bu = 4;
        var c = computer();
        bowlcalculation(bu,c,batsum1);
});
    bowlfive.addEventListener("click", function(){
    console.log("five is pressed");
        var bu = 5;
        var c = computer();
        bowlcalculation(bu,c,batsum1);
});
    bowlsix.addEventListener("click", function(){
    console.log("six is pressed");
        var bu = 6;
        var c = computer();
        bowlcalculation(bu,c,batsum1);
});
    return batsum1;
}


//computer generates a random number
function computer()
{
var min=1; 
var max=6;  
var random = Math.random() * (+max - +min) + +min;  
var round = Math.round(random);
console.log(round);
return round;
}

//calculating the user score 
function calculation(u,c)
{
    if( u != c){
        userchoice.innerHTML = u;
        computerchoice.innerHTML = c;
        sum = sum + u;
        userscore.innerHTML = sum;
        console.log("score is "+sum);}
        else {alert("You are out");
             console.log("Your final score is "+sum);
              bat.style.visibility = "hidden";
              batpic.style.visibility = "hidden";
              batone.style.visibility = "hidden";
              battwo.style.visibility = "hidden";
              batthree.style.visibility = "hidden";
              batfour.style.visibility = "hidden";
              batfive.style.visibility = "hidden";
              batsix.style.visibility = "hidden";
              bowl.style.visibility = "visible";
              bowl.style.backgroundColor = "#e60000";
              bowling(sum);
             }
}

//calculating the computer score
function bowlcalculation(bu,c,batsum1)
{
    var batsum = batsum1;
    if( bu != c){
        userchoice.innerHTML = bu;
        computerchoice.innerHTML = c;
        bowlsum = bowlsum + c;
        computerscore.innerHTML = bowlsum;
        console.log("score is "+bowlsum);
        instantcheck(batsum,bowlsum);
      }
        else {alert("Computer is out");
             console.log("Computer final score is "+bowlsum);
              console.log("User wins");
              userwins.style.visibility= "visible";
              bowl.style.visibility = "hidden";
              bowlpic.style.visibility = "hidden";
              bowlone.style.visibility = "hidden";
              bowltwo.style.visibility = "hidden";
              bowlthree.style.visibility = "hidden";
              bowlfour.style.visibility = "hidden";
              bowlfive.style.visibility = "hidden";
              bowlsix.style.visibility = "hidden";
             }
}

function instantcheck(batsum,bowlsum)
{
    var batsum1 = batsum;
    console.log("bat score "+batsum1)
    var bowlsum1 = bowlsum;
    console.log("bowl score is "+bowlsum1)
    if(bowlsum1>batsum1){
                console.log("computer winssssssssssssss");  
        bowl.style.visibility = "hidden";
              bowlpic.style.visibility = "hidden";
              bowlone.style.visibility = "hidden";
              bowltwo.style.visibility = "hidden";
              bowlthree.style.visibility = "hidden";
              bowlfour.style.visibility = "hidden";
              bowlfive.style.visibility = "hidden";
              bowlsix.style.visibility = "hidden";
         computerwins.style.visibility= "visible";
            }
    else{console.log("continue");}
    
}

function colorchange()
{
    setTimeout(function(){
         batone.style.backgroundColor = "#660000";
        battwo.style.backgroundColor = "#660000";
        batthree.style.backgroundColor = "#660000";
        batfour.style.backgroundColor = "#660000";
        batfive.style.backgroundColor = "#660000";
        batsix.style.backgroundColor = "#660000";
    }, 200);
}
