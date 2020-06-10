var rand_num ;
var num_guesses;

function getRandomArbitrary() {
    Math.round(Math.random() * (11 - 1) + 1); 
}

function main() {
    alert(working);
    var rand_num = Math.rounf(Math.random() * (11 - 1) + 1);
}

function main() { 
    var myButton = document.getElementById("button");
    myButton.addEventListener("click", userGuess)
}

function userGuess() {
        
    var userNumb = document.getElementById("guess").value 
    
    document.getElementById("result").innerHTML = "You guessed: " + userNumb;
 }