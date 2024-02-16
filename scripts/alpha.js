
function continueGame(){
    const alphabet = getRandomAlphabet();

    const alphabetContainer = document.getElementById('alphabet');
    alphabetContainer.innerText = alphabet;

    addBGColorById(alphabet);
}


function play(){
    hideElementById('home');
    showElementById('play-ground');
    continueGame();
}