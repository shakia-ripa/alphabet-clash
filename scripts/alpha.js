
function continueGame() {
    const alphabet = getRandomAlphabet();

    const alphabetContainer = document.getElementById('alphabet');
    alphabetContainer.innerText = alphabet;

    addBGColorById(alphabet);
}

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;

    // expected to press
    const currentAlphabetElement = document.getElementById('alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log("Player Pressed", playerPressed, "Expected", expectedAlphabet);

    // check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log("You got a point");
    }
    else{
        console.log("you lost a life");
    }
}

// capture keyboard keypress
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function play() {
    hideElementById('home');
    showElementById('play-ground');
    continueGame();
}