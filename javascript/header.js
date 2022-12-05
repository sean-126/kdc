const heroHeightEl = document.querySelector('.section-1');
const headerEl = document.querySelector('.header');
const logoEl = document.querySelector('.logo a img')
const headerMenuEls = document.querySelector('.menu')

//hero 높이값
console.log(heroHeightEl.offsetHeight);



let headerChange = window.addEventListener('scroll', () => {
    if(window.scrollY > heroHeightEl.offsetHeight) {
        headerEl.style.backgroundColor = '#fff';
        logoEl.src = './images/logo_codingx_kr.png';
    }else {
        headerEl.style.backgroundColor = '#101F41';
        logoEl.src = './images/logo_codingx_kr_dark.png';
        headerMenuEls.style.color = '#fff';
    }
})