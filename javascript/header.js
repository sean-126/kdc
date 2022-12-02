const heroHeightEl = document.querySelector('.section-1');
const headerEl = document.querySelector('.header');

//hero 높이값
console.log(heroHeightEl.offsetHeight);

console.log(document.documentElement.scrollTop)




const scrollYValue = window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    return window.scrollY
})

if(scrollYValue > heroHeightEl) {
    headerEl.style.backgroundColor = '#fff';
}else {
    headerEl.style.backgroundColor = '#000';
}