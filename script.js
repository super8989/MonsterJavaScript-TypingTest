const wording = ["Do you like JavaScript as much as I do?", "Hope you are having fun this is a simple game", "This is a typing test. Go ahead and type along"];

const message = document.querySelector(".message");
const playText = document.querySelector("textarea");
const button = document.querySelector("button");

button.addEventListener("click", function() {
    console.log(this.innerText);
})