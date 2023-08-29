const button = document.getElementById("btnCambiarColor");
let isColor = true;

button.addEventListener("click", () => {
  document.body.style.backgroundColor = isColor ? "#479EB7" : "#712C83";
  isColor = !isColor;
});
