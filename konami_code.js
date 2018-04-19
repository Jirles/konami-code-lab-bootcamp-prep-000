// original const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65], my browswer didn't return numbers //
//went with strings and e.key //
const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]

function init() {
  // Write your JavaScript code inside the init() function
  function konamiAlert(e){
    for (let i = 0; i < 10;i++){
      if (e.key === code[i]){
        continue;
      } else {
        return;
      }
    alert("Nice Job :)");
    }
  }
  document.body.addEventListener('keydown', konamiAlert);
}