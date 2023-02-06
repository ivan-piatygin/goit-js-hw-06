const inputRef = document.getElementById("name-input");
const nameRef = document.getElementById("name-output");

const getInputedName = ({ target }) =>
  (nameRef.innerText = target.value ? target.value : "Anonymous");

inputRef.addEventListener("input", getInputedName);
