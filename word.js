let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainerEl = document.getElementById('wordsContainer');
let errorMsgEl = document.getElementById("errorMsg");
let userInputEl = document.getElementById("userInput");

function displayWords(item) {
    let fontSize = Math.ceil(Math.random() * 40) + "px";
    let spanEl = document.createElement("span");

    spanEl.textContent = item;
    spanEl.style.fontSize = fontSize;
    spanEl.classList.add("m-3");

    wordsContainerEl.appendChild(spanEl);
}

for (let item of wordCloud) {
    displayWords(item);
}

function onAddWordToWordCloud() {
    if (userInputEl.value !== "") {
        errorMsgEl.textContent = "";
        displayWords(userInputEl.value);
        userInputEl.value = "";
    } else {
        errorMsgEl.textContent = "Please enter a word";
    }
}