// const accordionItems = document.querySelectorAll(
//   '#faq-accordion .accordion-item .accordion-header',
// );

// accordionItems.forEach(item => {
//   item.addEventListener('click', e => {
//     const target = e.currentTarget.parentNode;
//     target.classList.toggle('is-toggled');
//     const panel = target.querySelector('.accordion-panel');
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + 'px';
//     }
//   });
// });

const accordionBtnEls = document.getElementsByClassName('acc-btn');


for (i = 0; i < accordionBtnEls.length; i++) {
  accordionBtnEls[i].addEventListener('click', function() {
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
  }
});
}
