function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetsArray = alphabetString.split('')

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabetsArray[index];
    return alphabet;
}

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');

}

function addElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);

    element.classList.remove('bg-orange-400');

}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;

}

function keyboardButtonPressed(event) {


    const playerPressed = event.key;
    //stop the game if press 'Esc'   
    if (playerPressed === 'Escape') {
        gameOver();
    }

    const currentAlphabet = document.getElementById('current-alphabet');
    const currentAlphabetElement = currentAlphabet.innerText;
    const expectedAlphabet = currentAlphabetElement.toLocaleLowerCase();



    //checked match or not
    if (expectedAlphabet === playerPressed) {
        //update score

        const currentScore = getTextElementValueById('score');
        const newScore = currentScore + 1;
        setTextElementValueById('score', newScore);


        // const currentScoreElement = document.getElementById('score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // const newScore = currentScore + 1;

        // currentScoreElement.innerText = newScore;
        // console.log('win');
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    }
    else {
        const currentScore = getTextElementValueById('life');
        const newScore = currentScore - 1;
        setTextElementValueById('life', newScore);

        if (newScore === 0) {
            gameOver();
        }
    }
}

document.addEventListener('keyup', keyboardButtonPressed);


function continueGame() {
    const alphabet = getRandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    setBackgroundColorById(alphabet);

}

function play() {
    /** hide everything only show the playground **/
    addElementById('home-screen');
    addElementById('final-score');
    hideElementById('play-ground');

    /** reset score and life **/
    setTextElementValueById('life', 5);
    setTextElementValueById('score', 0);

    continueGame();
}
function gameOver() {
    addElementById('play-ground');
    hideElementById('final-score');
    //update the final score
    const lastSore = getTextElementValueById('score');
    setTextElementValueById('last-score', lastSore);

    //clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);




}