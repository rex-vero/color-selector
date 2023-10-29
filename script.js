const values = document.getElementById("values");
const hexInput = document.getElementById("hexInput");
const copyBtn = document.getElementById("setBtn");
colorPicker = new iro.ColorPicker(".colorPicker", {
  borderWidth: 1,
  borderColor: "#fff"
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