const integers = document.querySelector("#integer-body");
const operators = document.querySelector("#operator-body");
let result = document.querySelector("#result")

integers.addEventListener('click', num => {
    console.log(num.target.value)
    let currentValue = num.target.innerText;

    if (num.target.matches('.integer')) {
        if (result.innerHTML === "0") {
            result.innerHTML = currentValue;
        } else {
            result.append(currentValue);
        }
    }

    if (num.target.matches('.clear')) {
        result.innerHTML = 0;
    }



});

