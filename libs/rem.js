// const baseSize = 75;
function setRem() {
  // const scale = document.documentElement.clientWidth / 750;
  // document.documentElement.style.fontSize= (baseSize * Math.min(scale, 2)) + 'px';
  // console.log('onresize....')
  
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px'
}

setRem();

window.onresize = function () {
  setRem();
};

// document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px'