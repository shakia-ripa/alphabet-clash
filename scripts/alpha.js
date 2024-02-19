function play() {
    hideElementById('home');
    showElementById('play-ground');
    continueGame();
}

function continueGame() {
    const alphabet = getRandomAlphabet();

    const alphabetContainer = document.getElementById('alphabet');
    alphabetContainer.innerText = alphabet;

    addBGColorById(alphabet);
}

function endGame() {
    hideElementById('play-ground');
    showElementById('score');
    const finalScore = getInnerTextById('current-score')
    setInnerTextById('final-score', finalScore)
}

function resetScoreLife(){
    setInnerTextById('current-life', 5);
    setInnerTextById('current-score', 0);
}

function playAgain(){
    hideElementById('score');
    showElementById('play-ground');
    resetScoreLife();
    continueGame();
}

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;

    // expected to press
    const currentAlphabet = getInnerTextById('alphabet');
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check matched or not
    if (playerPressed === expectedAlphabet) {
        // update score
        const currentScoreText = getInnerTextById('current-score');
        const currentScore = parseInt(currentScoreText);
        const newScore = currentScore + 1;
        console.log(newScore);
        setInnerTextById('current-score', newScore)

        // Start a new round
        removeBGColorById(playerPressed);
        continueGame();
    }
    else {
        console.log("you lost a life");
        const currentLifeText = getInnerTextById('current-life');
        const currentLife = parseInt(currentLifeText);
        const newLife = currentLife - 1;
        console.log(newLife);
        if (newLife > 0) {
            setInnerTextById('current-life', newLife)

            // Start a new round
            removeBGColorById(expectedAlphabet);
            continueGame();
        }
        else {
            removeBGColorById(expectedAlphabet);
            endGame();
        }

    }
}

// capture keyboard keypress
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

