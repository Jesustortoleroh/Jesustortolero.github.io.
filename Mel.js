const playSound = function() {
  document.getElementById('audioelement').play();
  document.removeEventListener('click', playSound);
}
document.addEventListener('click', playSound);