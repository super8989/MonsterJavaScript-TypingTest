const wording = ["Do you like JavaScript as much as I do?", "Hope you are having fun this is a simple game", "This is a typing test. Go ahead and type along"];

let startTime, endTime;

const message = document.querySelector(".message");
const playText = document.querySelector("textarea");
const button = document.querySelector("button");

button.addEventListener("click", function() {
    console.log(this.innerText);
    if (this.innerText == "Start") {
        playText.disabled = false;
        playGame();
    } else if (this.innerText == "Done") {
        playText.disabled = true;
        button.innerText = "Start";
        endPlay();
    }
})

function playGame() {
    let randomNum = Math.floor(Math.random()*wording.length);
    message.innerText = wording[randomNum];
    let date = new Date();
    startTime = date.getTime();

    console.log(startTime);

    button.innerText = "Done";

    console.log(randomNum);
} 


function endPlay() {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);

    console.log(totalTime);

    let str = playText.value;

    //count words
    //divide by total time words per minute
    //output final message to player
}