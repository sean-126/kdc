const heroHeightEl = document.querySelector('.section-1');
const headerEl = document.querySelector('.header');
const logoEl = document.querySelector('.logo a img')
const headerMenuEls = [...document.querySelectorAll('.menu > li')]
const headerApplyBtnEl = document.querySelector('.header .apply-btn a')


let headerChange = window.addEventListener('scroll', () => {
  if (window.scrollY > heroHeightEl.offsetHeight) {
    headerEl.style.backgroundColor = '#fff';
    logoEl.src = './images/logo_codingx_kr.png';
    headerApplyBtnEl.style.display = 'block';
    headerMenuEls.forEach((el) => {
      el.style.color = '#3F3F3F';
    })
  } else {
    headerEl.style.backgroundColor = '#101F41';
    logoEl.src = './images/logo_codingx_kr_dark.png';
    headerApplyBtnEl.style.display = 'none';
    headerMenuEls.forEach((el) => {
      el.style.color = '#EBEBEB';
    })
  }
})

