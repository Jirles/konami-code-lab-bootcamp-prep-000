// original my browswer didn't return numbers //
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//if going with strings and e.key //
//const codeStrings = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"] //

function init() {
  // Write your JavaScript code inside the init() function
  function konamiAlert(e){
    for (let i = 0; i < 10;i++){
      //if using codeStrings, use e.key//
      if (e.which === parseInt(code[i])){
        
      } else {
        return;
      }
    }
    alert("Nice Job :)");
  }
  document.body.addEventListener('keydown', konamiAlert);
}