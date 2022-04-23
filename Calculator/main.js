const calculatingScreen = document.querySelector('.calculatingScreen');
const button = document.querySelectorAll('.button')
let numArray1 = []
let numArray2 = []
let numArrayIndicator = 0;
let operator

button.forEach(btn => btn.addEventListener('click', function calculate() {
    let userInput = btn.innerText
    calculatingScreen.append(userInput)

    if (!isNaN(userInput)) {
        if (numArrayIndicator === 0) {
            numArray1.push(userInput)
        }
        if (numArrayIndicator === 1) {
            numArray2.push(userInput)
        }
    }
    else if(userInput === 'C') {
        calculatingScreen.innerText = ''
        numArray1 = []
        numArray2 = []
        numArrayIndicator = 0
        
    }
    else if(userInput === '=') {
        calculation = eval(`${numArray1} ${operator} ${numArray2}`)
        calculatingScreen.innerText = ''
        calculatingScreen.append(calculation)
    }
    else {
        numArrayIndicator ++ 
        console.log(numArrayIndicator)
        operator = userInput
    }
}));





