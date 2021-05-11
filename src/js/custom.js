'use strict';

import './config/jqueryLoad';
import '../blocks/components/burger/burger.js';
import '../blocks/components/main-nav/main-nav.js';
import '@fancyapps/fancybox/dist/jquery.fancybox.min';
import '../blocks/components/dropdown/dropdown.js';

// Если js включен в браузере

var tagHtml = document.querySelector('html');
tagHtml.classList.add('js');

// скрытие контента в промосекции при показе меню на мобильнике

var burger = document.querySelector('.burger');

function hideElements() {
  var triggeringSection = document.getElementById('trigger');
  var elemsToHide = triggeringSection.querySelectorAll('*:nth-child(-n+2)');

  if (burger.classList.contains('burger--close')) {
    for (var elemToHide of elemsToHide) {
      elemToHide.style.opacity = '1';
    }
  } else {
    for (var elemToHide of elemsToHide) {
      elemToHide.style.opacity= '0';
    }
  }
}

burger.addEventListener('click', hideElements);

// скрытие контента в промосекции при показе меню на мобильнике

// слайдер "было-стало" (сценарий пока только для мобильника)

var controller = document.querySelector('.slider__control');
var catBefore = document.querySelector('.slider__slide-wrapper--left-side');
var catAfter = document.querySelector('.slider__slide-wrapper--right-side');

controller.onchange = function() {
  var catBeforeWidth = parseInt(catBefore.style.width);
  var catAfterWidth = parseInt(catAfter.style.width);

  if (controller.value > 0) {
    catAfter.style.width = controller.value + '%';
    var catBeforeChanged = catBeforeWidth - controller.value;
    catBefore.style.width = catBeforeChanged + '%';
  } else {
    catAfter.style.width = controller.value + '%';
    var catBeforeChanged = 100;
    catBefore.style.width = catBeforeChanged + '%';
  }
}
// слайдер "было-стало"

// Если js включен в браузере

// Плавный скол с навигации

/* $(".scrollto > a").click(function () {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
  return false;
}); */

// Плавный скол с навигации
