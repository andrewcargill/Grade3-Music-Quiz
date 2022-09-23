
let username = document.getElementById("username");
let players_username = username.value;

let startGame = document.getElementById("start-game");
startGame.addEventListener("click", function() {

   /// window.localStorage.setItem("username", username.value);
    window.location.href = "game.html";
    
});

console.log('------------hello');