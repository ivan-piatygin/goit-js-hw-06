const inputRef = document.getElementById("validation-input");

const onBlurBorderColor = function (event) {
  let inputValue = event.currentTarget.value;

  if (inputValue.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  }

  if (inputRef.value.length === 0) {
    inputRef.classList.remove("valid");
    inputRef.classList.remove("invalid");
  }
  if (
    inputRef.value.length !== Number(inputRef.dataset.length) &&
    inputRef.value.length !== 0
  ) {
    inputRef.classList.add("invalid");
  }
};

inputRef.addEventListener("blur", onBlurBorderColor);


