document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    if (value === "clr") {
      buttonClear();
    } else if (value === "=") {
      buttonOperate();
    } else {
      buttonA(value);
    }
  });
});

let currentInput = "";

function buttonA(a) {
  currentInput += a;
  document.querySelector("#screen").textContent = currentInput;
}

function operate(firstNum, secondNum, operator) {
  switch (operator) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "x":
      return firstNum * secondNum;
    case "/":
      if (secondNum === 0) return "Error: Division by Zero";
      return firstNum / secondNum;
    default:
      return secondNum;
  }
}

function extractNumbersAndOperators(input) {
  let numbers = [];
  let operators = [];
  let currentNumber = "";
  for (let char of input) {
    if (!isNaN(char) || char === ".") {
      currentNumber += char;
    } else if (["+", "-", "x", "/"].includes(char)) {
      if (currentNumber) {
        numbers.push(parseFloat(currentNumber));
        currentNumber = "";
      }
      operators.push(char);
    }
  }

  if (currentNumber) {
    numbers.push(parseFloat(currentNumber));
  }
  return { numbers, operators };
}

function operation() {
  let arr = [];

  if (document.querySelector("#screen").textContent.includes("+")) {
    arr = document.querySelector("#screen").textContent.split("+");
    return parseInt(arr[0]) + parseInt(arr[1]);
  } else if (document.querySelector("#screen").textContent.includes("-")) {
    arr = document.querySelector("#screen").textContent.split("-");
    return parseInt(arr[0]) - parseInt(arr[1]);
  } else if (document.querySelector("#screen").textContent.includes("x")) {
    arr = document.querySelector("#screen").textContent.split("x");
    return parseInt(arr[0]) * parseInt(arr[1]);
  } else {
    arr = document.querySelector("#screen").textContent.split("/");
    if (parseInt(arr[1]) === 0) {
      return `error, zero is not divisible`;
    } else {
      return parseInt(arr[0]) / parseInt(arr[1]);
    }
  }
}

function buttonOperate() {
  const { numbers, operators } = extractNumbersAndOperators(currentInput);
  if (numbers.length === 0) return;
  let result = numbers[0];
  for (let i = 0; i < operators.length; i++) {
    result = operate(result, numbers[i + 1], operators[i]);
  }
  document.querySelector("#screen").textContent = result;
  currentInput = result.toString();
}

function buttonClear() {
  document.querySelector("#screen").textContent = "0";
  currentInput = "";
}
