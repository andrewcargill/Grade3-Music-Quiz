
let username = document.getElementById("username");
let players_username = username.value;


/// start up

document.addEventListener("DOMContentLoaded", function () {
   welcomeHTML();
   ///addListenersToButtons();
});


///Welcome text
function welcomeHTML() {
   let textContainer = document.getElementById("text");
   textContainer.style.textAlign = "center";
   textContainer.innerHTML =`
   <p>
   Hello and Welcome
</p>
<p>This game will test your music knowledge.</p>
<p>First off, enter a username</p>
<div id="sign-in">
   `;
};



/// Listeners
let startGame = document.getElementById("start-game");
startGame.addEventListener("click", function() {

   window.localStorage.setItem("username", username.value);
   ///window.location.href = "game.html";
    
});

console.log('------------hello');