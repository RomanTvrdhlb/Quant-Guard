import noUiSlider from 'nouislider';

const stakeRange = document.getElementById('stake');
const daysRange = document.getElementById('days');

if(stakeRange){
  let stakeSlider = stakeRange.querySelector('.range-slider');
  let stakeValue = stakeRange.querySelector('.range__value');

  noUiSlider.create(stakeSlider, {
    start: 50,
    step: .2,
    connect: 'lower',
    range: {
        min: .1,
        max: 500,
    },
  });
  stakeSlider.noUiSlider.on('update', function (values, handle) {
  
    stakeValue.value = values[handle];
  });
}

if(daysRange){
  let daysSlider = daysRange.querySelector('.range-slider');
  let daysValue = daysRange.querySelector('.range__value');

  noUiSlider.create(daysSlider, {
    start: 45,
    step: 1,
    connect: 'lower',
    range: {
        min: 1,
        max: 365,
    },
  });
  daysSlider.noUiSlider.on('update', function (values, handle) {
  
    daysValue.value = Math.round(values[handle]);
  });
}