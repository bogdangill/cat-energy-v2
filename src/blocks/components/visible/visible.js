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