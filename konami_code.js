// original my browswer didn't return numbers //
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//if going with strings and e.key //
//const codeStrings = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"] 

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  
  function konamiAlert(e){
    var key = parseInt(e.which);
    if (key === code[index]){
      index++;
      if (index === code.length){
         alert("Nice Job :)");
         index = 0;
      }
    } else {
      index = 0;
      return;
    }
  }
  document.body.addEventListener('keydown', konamiAlert);
}