// State Variables can be declared outside of the onReady

//*state

let fungusHp = "100 AP";
let playerAp = "100 AP";
//attack and hit points
let attacks = {
 arcaneScepter: {attackPoints: 12, hitPoints: 14},
entangle: {attackPoints: 23, hitPoints: 9},
dragonBlade: {attackPoints: 38, dragonBlade, hitPoints :47},
starFire: {attackPoints: 33, starFire, hitPoints: 25}
};

function onReady() {
    //console.log("Ready to go!")
                                        //elements in DOM
    let freakyFungusWalk = document.getElementById("freaky-fungus walk");
    let hpText = document.getElementById("hp-Text");
    let apText = document.getElementById("ap-Text");
    let hpMeter = document.getElementById("hp-meter");
    let apMeter = document.getElementById("ap-meter");
   
    // render function
    function render() {
hpText.textContent = `${fungusHp} HP`;
apText.textContent = `${playerAp} AP`;
hpMeter.value = fungusHp;   //Used to update the value that is currently held by an input field.
apMeter.value = playerAp;

//console.log("display updated")
    }
//attack function
function makeAttack(attackPoints, hitPoints) {
fungusHp -= hitPoints;
playerAp -= attackPoints;

render(); //Updates the DOM

if (fungusHp === 0) {
    fungusElement.classList.remove("walk");
    fungusElement.classList.add("dead")
    disableAttacks();
    alert("the monster is dead and you win!");
    }else if (playerAp === 0) {
        fungusElement.classList.remove("walk");
        fungusElement.classList.add("jump");
        disableAttacks();
        alert("the monster wins and humanity is doomed 😢");
    }

}

}    
function disableAttacks(){
    document.querySelectorAll("attack-btn")
    };

                //*Render
     render();         

    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM



onReady()