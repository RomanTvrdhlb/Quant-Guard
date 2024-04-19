import noUiSlider from 'nouislider';

const stakeRange = document.getElementById('stake');
const daysRange = document.getElementById('days');

function pushValue(currentValue, siblingValue, percentDay, el, dayEl, profitEl){
  let totalPercent = (percentDay * siblingValue).toFixed(2);
  
  const totalValue = parseFloat(currentValue + (currentValue * totalPercent / 100)).toFixed(3);

  el.innerText = totalValue + ' $';
  dayEl.innerHTML = `<b>${percentDay}%</b> profit/day`;
  profitEl.innerText = `+${totalPercent} %`;
}


if(stakeRange){
  let stakeSlider = stakeRange.querySelector('.range-slider');
  let stakeValue = stakeRange.querySelector('.range__value');

  noUiSlider.create(stakeSlider, {
    start: 50,
    step: .2,
    connect: 'lower',
    range: {
        min: .1,
        max: 25000,
    },
  });
  stakeSlider.noUiSlider.on('change', function(values, handle){
    const currentValue = values[handle];
    const siblingValue = document.querySelector('#days input').value;
    let percentDay = 0.35;
    const totalValueElement = document.querySelector('.calc__total-value');
    const dayValueElement = document.querySelector('.calc__profit');
    const totalProfit = document.querySelector('.calc__total-profit');

    if(currentValue < 2500){
      percentDay = 0.35;
    } else {
      if(currentValue > 2500){
        percentDay = 1;
      }
    }

    pushValue(currentValue, siblingValue, percentDay, totalValueElement, dayValueElement, totalProfit);
  })
  stakeSlider.noUiSlider.on('update', function (values, handle) {
    
    stakeValue.value = values[handle];
  });
}

if(daysRange){
  let daysSlider = daysRange.querySelector('.range-slider');
  let daysValue = daysRange.querySelector('.range__value');

  noUiSlider.create(daysSlider, {
    start: 30,
    step: 1,
    connect: 'lower',
    range: {
        min: 1,
        max: 365,
    },
  });
  daysSlider.noUiSlider.on('change', function(values, handle){
    const siblingValue = values[handle];
    const currentValue = document.querySelector('#stake input').value;
    const dayValueElement = document.querySelector('.calc__profit');
    const totalProfit = document.querySelector('.calc__total-profit');
    let percentDay = 0.35;

    if(currentValue < 2500){
      percentDay = 0.35;
    } else {
      if(currentValue > 2500){
        percentDay = 1;
      }
    }
   
    const totalValueElement = document.querySelector('.calc__total-value');
   
    pushValue(currentValue, siblingValue, percentDay, totalValueElement, dayValueElement, totalProfit);
  })
  daysSlider.noUiSlider.on('update', function (values, handle) {
  
    daysValue.value = Math.round(values[handle]);
  });
}



const initialAmount = 1000; // Изначальное число
const percentPerDay = 0.35; // Процент за один день

// Функция для вычисления общего количества процентов за указанное количество дней
function calculateTotalPercent(days) {
    return percentPerDay * days;
}

// Функция для вычисления общей суммы после добавления процентов
function calculateTotalAmount(days) {
    const totalPercent = percentPerDay * days;
    return initialAmount + (initialAmount * totalPercent / 100);
}

// Пример использования функции
const days = 35; // Количество дней
const totalAmount = calculateTotalAmount(days);

console.log(`Общая сумма после ${days} дней: ${totalAmount}`);