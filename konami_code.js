// original my browswer didn't return numbers //
//const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
//if going with strings and e.key //
const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  function konamiAlert(e){
    if (e.key === code[index]){
      index++;
      console.log(e.key)
      console.log(index)
      if (index === code.length){
         alert("you did it!");
         index = 0;
      }
    } else {
      index = 0;
      return;
    }
  }
  document.body.addEventListener('keydown', konamiAlert);
}