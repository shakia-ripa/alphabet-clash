function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addBGColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}


function getRandomAlphabet(){
    // alphabet string
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // random index
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    // random alphabet
    const alphabet = alphabets[index];
    return alphabet;
}