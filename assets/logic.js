const integers = document.querySelector("#integer-body");
const operators = document.querySelector("#operator-body");
const el = document.getElementById('calculator'); 

//valuables for operations
let result = document.querySelector("#result")
let firstNumber, secondNumber, operatorType;

//variables for dragging calculator
let calculator, x, y, prevX, prevY;

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
    //check if operatorType, in case user is using operator for second time in one calculation
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

drag = (e) => {
    calculator = e.target;
    prevX = x - calculator.offsetLeft;
    prevY = y - calculator.offsetTop;
}

//observes mouse's position on document
cursorPos = (e) => {
    if (e.pageX) {
        x = e.pageX;
        y= e.pageY;
    }
    //if calculator is selected, then set to current position
    if (calculator) {
        calculator.style.left = `${x - prevX}px`;
        calculator.style.top = `${y - prevY}px`;
    }
}

drop = () => {
    calculator = false;
}

document.getElementById('calculator').onmousedown = drag;
document.onmousemove = cursorPos;
document.onmouseup = drop;


//To allow dragging on mobile devices *not reliable, currently
el.addEventListener("touchstart", drag, false);
el.addEventListener("touchleave", drop, false);
el.addEventListener("touchmove", cursorPos, false);
