import lottie from 'lottie-web';

const phoneData = require('./../phone_v1.json');

const phoneOptions = {
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: phoneData,
};

const phoneContainer = document.getElementById('phone');
const mobileContainer = document.getElementById('mobile');

function initAnimation(options, container) {
  if (options && container) {
    options.container = container;
    lottie.loadAnimation(options);
  }
}

initAnimation(phoneOptions, phoneContainer);
initAnimation(phoneOptions, mobileContainer);