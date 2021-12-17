const calculatorScreen = document.querySelector(".calculator-screen")
const updateScreen = (number) => {
    calculatorScreen.value = number
}

let prevNumber = ""
let calculationOperator = ""
let currentNumber = "0"

const numbers =  document.querySelectorAll(".number")

const inputNumber = (number) => {
    if (currentNumber === "0") {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const operators = document.querySelectorAll(".operator")

const inputOperator = (operator) => {
    if (calculationOperator === "") {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ""
}

const calculate = () => {
    let result = ""
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ""
}

const equalSign = document.querySelector(".equal-sign")

const clearBtn = document.querySelector(".all-clear")


const clearAll = () => {
    prevNumber = ""
    calculationOperator =""
    currentNumber = "0"
}

clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector(".decimal")

const inputDecimal = (dot) => {
    if(currentNumber.includes(".")){
        return
    }
    currentNumber += dot
}

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})



equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentNumber)
})

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

numbers.forEach((number) => [
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
])



