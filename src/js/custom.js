'use strict';

// import './config/jqueryLoad';
import '../blocks/components/burger/burger.js';
import '../blocks/components/main-nav/main-nav.js';
import '../blocks/components/dropdown/dropdown.js';

// Если js включен в браузере

let tagHtml = document.querySelector('html');
tagHtml.classList.add('js');

// скрытие контента в промосекции при показе меню на мобильнике

let burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  let switchers = document.querySelectorAll('.visible');
  
  for (let switcher of switchers) {

    if (switcher.classList.contains('visible--on')) {
      switcher.classList.add('visible--off');
      switcher.classList.remove('visible--on');
    } else {
      switcher.classList.remove('visible--off');
      switcher.classList.add('visible--on');
    }
  }
});

// скрытие контента в промосекции при показе меню на мобильнике

// слайдер "было-стало" (сценарий пока только для мобильника)

const controller = document.querySelector('.slider__control');
const catBefore = document.querySelector('.slider__slide-wrapper--left-side');
const catAfter = document.querySelector('.slider__slide-wrapper--right-side');
const controllButtons = document.querySelectorAll('.slider__control-text');

if (window.outerWidth < 768) {
  controller.setAttribute('value', 100);
  controller.setAttribute('step', 100);
} else {
  controller.setAttribute('value', 50);
  controller.setAttribute('step', 1);
}

catBefore.style.clipPath = 'inset(0 ' + (100 - controller.value) + '%' + ' 0 0)';
catAfter.style.clipPath = 'inset(0 0 0 ' + controller.value + '%' + ')';

controller.addEventListener('change', () => {
  controller.setAttribute('value', controller.value);
  catBefore.style.clipPath = 'inset(0 ' + (100 - controller.value) + '%' + ' 0 0)';
  catAfter.style.clipPath = 'inset(0 0 0 ' + controller.value + '%' + ')';
})

for (let controllButton of controllButtons) {

  controllButton.addEventListener('click', () => {
    switch(controllButton.dataset.state) {
      case 'before':
        controller.value = 100;
        catBefore.style.clipPath = 'inset(0 0 0 0)';
        catAfter.style.clipPath = 'inset(0 0 0 100%)';
        break;
      case 'after':
        controller.value = 0;
        catBefore.style.clipPath = 'inset(0 100% 0 0)';
        catAfter.style.clipPath = 'inset(0 0 0 0)';
        break;
    }
  })
}

// Если js включен в браузере

// Плавный скол с навигации

/* $(".scrollto > a").click(function () {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
  return false;
}); */

// Плавный скол с навигации
