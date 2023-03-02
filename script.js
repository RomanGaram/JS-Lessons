let firstNumber
let secondNumber
let answer

firstNumber = +prompt("Please enter first number", '');
secondNumber = +prompt("Please enter second number", '');

if ((firstNumber === '') || (secondNumber === '')) { 
    alert ('ERROR');   
} 
else {

        alert (String("adding=") + (Number(firstNumber) + Number(secondNumber)));

    if (firstNumber >= secondNumber) {
        alert (String("Subtraction=") + (Number(firstNumber) - Number(secondNumber)));
    } else (firstNumber < secondNumber) {
        confirm ('Are you sure you want to proceed with the operation?');
        alert (String("Subtraction=") + (Number(firstNumber) - Number(secondNumber)));
    }

    if (secondNumber == 0) {
        alert (String('You cannot divide by ZERO!'));
    }
    else if (secondNumber > 0) {
        alert (String('Division=') + (Number(firstNumber) / Number(secondNumber)));
    }

        alert (String("Multiplication=") + (Number(firstNumber) * Number(secondNumber)));

}