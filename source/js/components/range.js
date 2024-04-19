import noUiSlider from "nouislider";

const stakeRange = document.getElementById("stake");
const daysRange = document.getElementById("days");
let percentDay = 0.35;
const totalValueElement = document.querySelector(".calc__total-value");
const dayValueElement = document.querySelector(".calc__profit");
const totalProfit = document.querySelector(".calc__total-profit");

function pushValue(
  currentValue,
  siblingValue,
  percentDay,
  el,
  dayEl,
  profitEl
) {
  if (currentValue < 2500) {
    percentDay = 0.35;
  } else {
    if (currentValue > 2500) {
      percentDay = 1;
    }
  }
  let totalPercent = (percentDay * siblingValue).toFixed(2);
  let totalValue =
    parseFloat(currentValue) +
    (parseFloat(currentValue) * parseFloat(totalPercent)) / 100;
  totalValue = totalValue.toFixed(2);

  el.innerText = totalValue + " $";
  dayEl.innerHTML = `<b>${percentDay}%</b> profit/day`;
  profitEl.innerText = `+${totalPercent} %`;
}

stakeRange && pushValue(
  2500,
  30,
  percentDay,
  totalValueElement,
  dayValueElement,
  totalProfit
);

if (stakeRange) {
  let stakeSlider = stakeRange.querySelector(".range-slider");
  let stakeValue = stakeRange.querySelector(".range__value");
  const input = stakeSlider.parentNode.querySelector(".range__value");

  noUiSlider.create(stakeSlider, {
    start: 2500,
    step: 0.2,
    connect: "lower",
    range: {
      min: 0.1,
      max: 25000,
    },
  });
  stakeSlider.noUiSlider.on("change", function (values, handle) {
    const currentValue = values[handle];
    const siblingValue = document.querySelector("#days input").value;
    let percentDay = 0.35;
    const totalValueElement = document.querySelector(".calc__total-value");
    const dayValueElement = document.querySelector(".calc__profit");
    const totalProfit = document.querySelector(".calc__total-profit");

    pushValue(
      currentValue,
      siblingValue,
      percentDay,
      totalValueElement,
      dayValueElement,
      totalProfit
    );
  });

  stakeSlider.noUiSlider.on("update", function (values, handle) {
    stakeValue.value = values[handle];
  });

  input.addEventListener("change", function () {
    const siblingValue = document.querySelector("#days input").value;
    let percentDay = 0.35;
    const totalValueElement = document.querySelector(".calc__total-value");
    const dayValueElement = document.querySelector(".calc__profit");
    const totalProfit = document.querySelector(".calc__total-profit");
    const currentValue = input.value;
    stakeSlider.noUiSlider.set(currentValue);

    pushValue(
      currentValue,
      siblingValue,
      percentDay,
      totalValueElement,
      dayValueElement,
      totalProfit
    );
  });
}

if (daysRange) {
  let daysSlider = daysRange.querySelector(".range-slider");
  let daysValue = daysRange.querySelector(".range__value");
  const input = daysSlider.parentNode.querySelector(".range__value");
  noUiSlider.create(daysSlider, {
    start: 30,
    step: 1,
    connect: "lower",
    range: {
      min: 1,
      max: 365,
    },
  });
  daysSlider.noUiSlider.on("change", function (values, handle) {
    const siblingValue = values[handle];
    const currentValue = document.querySelector("#stake input").value;
    const dayValueElement = document.querySelector(".calc__profit");
    const totalProfit = document.querySelector(".calc__total-profit");
    let percentDay = 0.35;

    const totalValueElement = document.querySelector(".calc__total-value");

    pushValue(
      currentValue,
      siblingValue,
      percentDay,
      totalValueElement,
      dayValueElement,
      totalProfit
    );
  });
  daysSlider.noUiSlider.on("update", function (values, handle) {
    daysValue.value = Math.round(values[handle]);
  });
  input.addEventListener("change", function () {
    const currentValue = document.querySelector("#stake input").value;
    let percentDay = 0.35;
    const totalValueElement = document.querySelector(".calc__total-value");
    const dayValueElement = document.querySelector(".calc__profit");
    const totalProfit = document.querySelector(".calc__total-profit");
    const siblingValue = input.value;
    daysSlider.noUiSlider.set(siblingValue);

    pushValue(
      currentValue,
      siblingValue,
      percentDay,
      totalValueElement,
      dayValueElement,
      totalProfit
    );
  });
}
