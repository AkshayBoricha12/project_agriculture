function initializeMainSlider() {
  let slideImage = document.getElementsByClassName("navbar")[0];
  let count = 0;
  let imageURLs = ["farming_couple.webp", "farmer.webp", "farm.webp"];
  setInterval(() => {
    slideImage.style.backgroundImage = `url("assets/${imageURLs[count]}")`;
    count = (count + 1) % imageURLs.length;
  }, 5000);
}

setTimeout(() => {
  initializeMainSlider();
}, 1000);

let slides = document.querySelectorAll(".slide");
let indicators = document.querySelectorAll(".slide-indicator");
let counter = 0;
let intervalID = null;

function activateSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("slide-active", i === index);
    indicators[i].classList.toggle("current-slide-indicator", i === index);
  });
  counter = index;
}

function startSlider() {
  intervalID = setInterval(() => {
    activateSlide((counter + 1) % slides.length);
  }, 3000);
}

function changeSlide(index) {
  clearInterval(intervalID);
  activateSlide(index);
  startSlider();
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => changeSlide(index));
});

setTimeout(() => {
  activateSlide(0);
  startSlider();
}, 2000);

document.addEventListener("DOMContentLoaded", () => {
  let activeClientElement = document.querySelector(".active-clients-counter");
  let cnt = 0;
  let clientCounterIntervalID = setInterval(() => {
    activeClientElement.innerHTML = cnt;
    cnt++;
  }, 1000);

  setTimeout(() => {
    clearInterval(clientCounterIntervalID);
  }, 6000);
});

document.addEventListener("scroll", () => {
  let activeClientElement = document.querySelector(".years-experience");
  let cnt = 0;
  let clientCounterIntervalID = setInterval(() => {
    activeClientElement.innerHTML = cnt;
    cnt++;
  }, 200);

  setTimeout(() => {
    clearInterval(clientCounterIntervalID);
  }, 5200);
});

document.addEventListener("scroll", () => {
  let activeClientElement = document.querySelector(".no-of-product");
  let cnt = 0;
  let clientCounterIntervalID = setInterval(() => {
    activeClientElement.innerHTML = cnt;
    cnt++;
  }, 83);

  setTimeout(() => {
    clearInterval(clientCounterIntervalID);
  }, 5083);
});

document.addEventListener("scroll", () => {
  let activeClientElement = document.querySelector(".expert-farmers");
  let cnt = 0;
  let clientCounterIntervalID = setInterval(() => {
    activeClientElement.innerHTML = cnt;
    cnt++;
  }, 50);

  setTimeout(() => {
    clearInterval(clientCounterIntervalID);
  }, 4950);
});