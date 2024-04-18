import lottie from 'lottie-web';

const phoneData = require('./../phone_v1.json');
let animationInitialized = false;

const phoneOptions = {
  container: document.getElementById('phone'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: phoneData,
};

function initAnimation(options){
  if(options){
    const item = lottie.loadAnimation(options);
  }
}

initAnimation(phoneOptions);
