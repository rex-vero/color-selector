const values = document.getElementById("values");
const hexInput = document.getElementById("hexInput");
const copyBtn = document.getElementById("setBtn");
colorPicker = new iro.ColorPicker(".colorPicker", {
  borderWidth: 2,
  borderColor: "#000"
});
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(hexInput.value);
  copyBtn.innerText = 'کپی شد!';
});
colorPicker.on(["color:init", "color:change"], (color) => {
  hexInput.value = color.hexString;
});
hexInput.addEventListener('change', () => {
  colorPicker.color.hexString = this.value;
});