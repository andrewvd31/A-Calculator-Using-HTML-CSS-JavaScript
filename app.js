const clearBtn = document.querySelector(".clear-btn");
const backBtn = document.querySelector(".backsp-btn");
const equalToBtn = document.querySelector(".equal-to");
const btnClick = document.querySelectorAll(".btn");
const inputbtnValue = document.querySelector(".number-box");
const operationBtn = document.querySelectorAll(".btn .operation-btn");

btnClick.forEach(myFunction);

equalToBtn.addEventListener("click", evaluateFunction);

backBtn.addEventListener("click", backSpaceFunction);

clearBtn.addEventListener("click", clearFunction);

function buttonFunctionDisable(data) {
  for (let buttons of btnClick) {
    buttons.disabled = data;
  }
}

function evaluateFunction() {
  if (inputbtnValue.value) {
    const equalTo = eval(inputbtnValue.value);
    inputbtnValue.value = equalTo;
    buttonFunctionDisable(false);
    if (inputbtnValue.value.length === inputbtnValue.maxLength){
        buttonFunctionDisable(true);
    }
  }
}

function clearFunction() {
  inputbtnValue.value = "";
  buttonFunctionDisable(false);
}

function backSpaceFunction() {
  inputbtnValue.value = inputbtnValue.value.slice(0, -1);
  buttonFunctionDisable(false);
}

function myFunction(button) {
  button.addEventListener("click", (e) => {
    const btnClick = e.target.dataset.set;
    if (btnClick) {
      inputbtnValue.value += btnClick;
    }
    if (inputbtnValue.value.length === inputbtnValue.maxLength) {
      if (
        btnClick === "+" ||
        btnClick === "-" ||
        btnClick === "*" ||
        btnClick === "/"
      ) {
        buttonFunctionDisable(false);
      }
      else{
        buttonFunctionDisable(true);
      }
    }
  });
}
