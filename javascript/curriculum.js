const btnEls = document.querySelector('.curri-btn-list');
const curriEls = document.querySelector('.curri-detail-list');
const btnIndexEl = document.querySelector('.curri-btn');

const activeBtn = (event) => {
  // 인덱스 찾기
  const btnList = event.parentElement;
  const btnIndex = Array.prototype.indexOf.call(btnList.children, event);
  
  // 버튼 활성화
  const selectBtnEl = btnEls.querySelector('.is-active');
  const selectCurriEl = curriEls.querySelector('.is-view');
  const viewCurriEl = curriEls.children[btnIndex];

  // 활성 클래스 초기화
  selectBtnEl.classList.remove('is-active');
  selectCurriEl.classList.remove('is-view');

  // // 활성 클래스 추가
  event.classList.add('is-active');
  viewCurriEl.classList.add('is-view');
}

// 이벤트 리스너
btnEls.addEventListener('click', (event) => {
  const target = event.target;

  if (target.nodeName === 'LI') {
    activeBtn(target);
  }
})

// (() => {
//   const btnEls = document.querySelector('.curri-btn-list');
//   const curriEls = document.querySelector('.curri-detail-list');

//   // 버튼 활성화
//   const setClassActive = e => {
//     const _activeBtn = btnEls.querySelector('.is-active');
//     _activeBtn.classList.remove('is-active');
//     e.classList.add('is-active');
//   };

//   // 이벤트리스너
//   btnEls.addEventListener('click', e => {
//     const target = e.target;

//     if (target.nodeName === 'LI') {
//       setClassActive(target);
//     }
//   });
// })();