const heroHeightEl = document.querySelector('.section-1');
const headerEl = document.querySelector('.header');
const logoEl = document.querySelector('.logo a img')
const headerMenuEls = [...document.querySelectorAll('.menu > li')]
const headerApplyBtnEl = document.querySelector('.header .apply-btn a')
const menuBtnLight = document.querySelector('.header .menu-btn .btn-light-mode')
const menuBtnDark = document.querySelector('.header .menu-btn .btn-dark-mode')

let headerChangeWeb = window.addEventListener('scroll', () => {
  if (window.scrollY > heroHeightEl.offsetHeight) {
    headerEl.style.backgroundColor = '#fff';
    logoEl.src = './images/logo_codingx_kr.webp';
    headerApplyBtnEl.style.display = 'block';
    headerMenuEls.forEach((el) => {
      el.style.color = '#3F3F3F';
    })
  } else {
    headerEl.style.backgroundColor = '#101F41';
    logoEl.src = './images/logo_codingx_kr_dark.webp';
    headerApplyBtnEl.style.display = 'none';
    headerMenuEls.forEach((el) => {
      el.style.color = '#EBEBEB';
    })
  }
})

let headerChangeMobile = window.addEventListener('scroll', () => {
  if (window.scrollY > heroHeightEl.offsetHeight) {
    headerEl.style.backgroundColor = '#fff';
    logoEl.src = './images/logo_codingx_kr.webp';
    menuBtnLight.style.display = 'block';
    menuBtnDark.style.display = 'none';
  }else {
    headerEl.style.backgroundColor = '#101F41';
    logoEl.src = './images/logo_codingx_kr_dark.webp';
    menuBtnDark.style.display = 'block';
    menuBtnLight.style.display = 'none';
  }  
})

if (window.screenX > 800) {
  headerChangeWeb()
} else {
  headerChangeMobile()
}