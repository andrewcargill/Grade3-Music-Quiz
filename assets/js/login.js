
let username = document.getElementById("username");
let textContainer = document.getElementById("text");

/// DOM Loading
document.addEventListener("DOMContentLoaded", function () {
   welcomeHTML();
   buttonListeners();
});

///Welcome text
function welcomeHTML() {
   textContainer.style.textAlign = "center";
   textContainer.innerHTML =`
   <p>
   Hello and Welcome
</p>
<p>This game will test your music knowledge</p>
<p>Enter your name to start and GOOD LUCK!</p>
<div id="sign-in">
   `;
}

/// Listeners
function buttonListeners() {
let startGame = document.getElementById("start-game");
startGame.addEventListener("click", function(event) {
event.preventDefault();
   window.localStorage.setItem("username", username.value);
   window.location.href = "game.html";
   //usernameWelcomeHTML();
    
});

}
