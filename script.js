let firstNumber = +prompt("Please enter first number");
let secondNumber = +prompt("Please enter second number");
let ask;
console.log(firstNumber, typeof(firstNumber));  
console.log(secondNumber, typeof(secondNumber));

if ((firstNumber == '') || (secondNumber ==  '') || (firstNumber == null) || (secondNumber == null)) { 
    alert ('ERROR');  
}
else {

    alert (("Adding=") + ((firstNumber) + (secondNumber)));


    if (firstNumber < secondNumber) {
       ask = confirm ('Are you sure you want to proceed with the operation?');
    } if (ask == true || ask == undefined) {
        alert (("Subtraction=") + ((firstNumber) - (secondNumber)));
    }
    else if (ask == false){}

    console.log(ask, typeof(ask));
    
    if (secondNumber === 0) {
        alert (('You cannot divide by ZERO!'));
    }
    else if (secondNumber > 0) {
        alert (('Division=') + ((firstNumber) / (secondNumber)));
    }

        alert (("Multiplication=") + ((firstNumber) * (secondNumber)));
}