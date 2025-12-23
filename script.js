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

function buttonA(a) {
  document.querySelector("#screen").textContent += a;
}

function operation() {
  let arr = [];
  // const answer;

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
    return parseInt(arr[0]) / parseInt(arr[1]);
  }
}

function buttonOperate() {
  const result = operation();
  document.querySelector("#screen").textContent = result;
}

function buttonClear() {
  document.querySelector("#screen").textContent = " ";
}
