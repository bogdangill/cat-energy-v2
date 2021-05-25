document.addEventListener('DOMContentLoaded', () => {
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
}) 