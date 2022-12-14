const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','E','F'];
const button = document.getElementById('btn')
//span class of colors
const colors = document.querySelector('.color')
//#fff555
button.addEventListener('click', function(){
  let hexidecimal = '#'
  for(let i = 0; i < 6; i++){
  console.log(hexidecimal+= hex[randomColor()]);
  }
  document.body.style.backgroundColor = hexidecimal;
  colors.textContent = hexidecimal;
})
function randomColor(){
  return Math.floor(Math.random()*hex.length)
}
