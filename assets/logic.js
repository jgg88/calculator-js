const integers = document.querySelector("#integer-body");
const operators = document.querySelector("#operator-body");
let result = document.querySelector("#result")
let firstNumber;
let secondNumber;
let operatorType;

integers.addEventListener('click', num => {
    let currentValue = num.target.innerHTML;

    if (num.target.matches('.integer')) {
        if (result.innerHTML === "0" || result.innerHTML === operatorType) {
            result.innerHTML = currentValue;
        } else {
            result.append(currentValue);
        }
    }

    if (num.target.matches('.clear')) {
        result.innerHTML = 0;
        firstNumber = null;
        secondNumber = null;
        operatorType = null;
    }

    if (firstNumber) {
        secondNumber = parseFloat(result.innerHTML);
    }

    if(num.target.matches('.equals')) {
        this.calculate();
    }
});

operators.addEventListener('click', operator => {

    //check if operatorType, incase user is using operator for second time in one calculation
    if (operatorType) {
        this.calculate();
    }
    firstNumber = parseFloat(result.innerHTML);
    operatorType = operator.target.value;
    result.innerHTML = operator.target.value;
})

calculate = () => {
    if (operatorType === 'plus') {
        result.innerHTML = firstNumber + secondNumber;
    } else if (operatorType === 'minus') {
        result.innerHTML = firstNumber - secondNumber;
    } else if (operatorType === 'times') {
        result.innerHTML = firstNumber * secondNumber;
    } else if (operatorType === 'divided by') {
        result.innerHTML = firstNumber / secondNumber;
    }
}