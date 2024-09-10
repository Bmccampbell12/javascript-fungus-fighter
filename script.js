// State Variables can be declared outside of the onReady

//*state

let fungusHp = "100 AP";
let playerAp = "100 AP";
//attack and hit points
let attacks = {
arcaneScepter: {attackPoints: 12, hitPoints: 14},entangle: {attackPoints: 23, hitPoints: 9}, dragonBlade: {attackPoints: 38, hitPoints :47}, starFire: {attackPoints: 33,  hitPoints: 25}

}; //hoprfully will get updated 

function onReady() {
    //console.log("Ready to go!")
                                        //elements in DOM will get called when done rendering 
    let freakyFungusWalk = document.getElementById("freaky-fungus walk");
    let hpText = document.getElementById("hp-Text");
    let apText = document.getElementById("ap-Text");
    let hpMeter = document.getElementById("hp-meter");
    let apMeter = document.getElementById("ap-meter");
   
    // render function
    function render() {
hpText.textContent = `${fungushp} HP`;
apText.textContent = `${playerAp} AP`;
hpMeter.value = fungusHp;   //Used to update the value that is currently held by an input field to the DOM
apMeter.value = playerAp;

//console.log("display updated")
    }
//attack function
function makeAttack(attackPoints, hitPoints) { 
fungusHp -= hitPoints; //will decrease by the value of hitpoints
playerAp -= attackPoints; // will decrease by the value of attackpoints

return(attackPoints, hitPoints); //Updates the DOM

if (fungusHp === 0) { //if fungusHp is exaxtly 0
    fungusElement.classList.remove("walk"); //removes entire walking class
    fungusElement.classList.add("dead") //adds to entire fungus element class 
    disableAttacks();
    return ("the monster is dead and you win!");

    }else if (playerAp === 0) {  //if player ap is exactly 0
        fungusElement.classList.remove("walk"); //retrieve and removes walk
        fungusElement.classList.add("jump"); // adds t0 jump class 
        disableAttacks();
        return ("the monster wins and humanity is doomed 😢");
    }

}}    
function disableAttacks(){
    document.querySelectorAll("attack-btn")
    };
    return 

                //*Render
     render();         

    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM



onReady()