// const btnEls = document.querySelector('.curri-btn-list');
// const curriEls = document.querySelector('.curri-detail-list');
// const btnIndexEl = document.querySelector('.curri-btn');

// const activeBtn = (event) => {
//   // 인덱스 찾기
//   const btnList = event.parentElement;
//   const btnIndex = Array.prototype.indexOf.call(btnList.children, event);
  
//   // 버튼 활성화
//   const selectBtnEl = btnEls.querySelector('.is-active');
//   const selectCurriEl = curriEls.querySelector('.is-view');
//   const viewCurriEl = curriEls.children[btnIndex];

//   // 활성 클래스 초기화
//   selectBtnEl.classList.remove('is-active');
//   selectCurriEl.classList.remove('is-view');

//   // // 활성 클래스 추가
//   event.classList.add('is-active');
//   viewCurriEl.classList.add('is-view');
// }

// // 이벤트 리스너
// btnEls.addEventListener('click', (event) => {
//   const target = event.target;

//   if (target.nodeName === 'DIV') {
//     activeBtn(target);
//   }
// })


const curriculumData = [
  [
    {
      title: 'AI 초압축 이론 / 파이썬 프로그래밍'
    },
    {
      week: '1주차',
      lesson: [
        '오리엔테이션',
        '인공지능 기초개념',
        '인공지능 학습방법',
        '파이썬 소개',
        '파이썬 실습환경',
        '파이썬의 기초',
        '파이썬의 연산'
      ]
    },  
    {
      week: '2주차',
      lesson: [
        '변수와 데이터',
        '문자열 포메팅',
        '컬렉션 데이터',
        '조건문과 반복문',
        '함수의 사용'
      ]
    }
  ],
  [
    {
      title: '데이터 분석 및 시각화'
    },
    {
      week: '3주차',
      lesson: [
        '데이터 활용 방법',
        '데이터 구조 이해',
        '데이터를 다루는 도구',
        'Pandas 사용법'
      ]
    },  
    {
      week: '4주차',
      lesson: [
        '결측치와 이상치',
        '데이터 살펴보기',
        '상관관계 파악',
        '그룹별 연산'
      ]
    },
    {
      week: '5주차',
      lesson: [
        '클라우드 분석환경',
        '탐색적 데이터 분석',
        '그룹별 연산 적용',
        '데이터 변환'
      ]
    },
    {
      week: '6주차',
      lesson: [
        '데이터 시각화',
        '시각화 디자인 옵션',
        '분석 과정 리뷰'
      ]
    }
  ],
  [
    {
      title: '머신러닝 모델링'
    },
    {
      week: '7주차',
      lesson: [
        '머신러닝 개요',
        'K-NN 최근접 이웃법',
        '의사결정나무'
      ]
    },
    {
      week: '8주차',
      lesson: [
        '앙상블 랜덤포레스트',
        'K-means 군집 분석',
        '연관규칙 분석',
        '신경망 분석'
      ]
    },
    {
      week: '9주차',
      lesson: [
        '분석목표 설정',
        '데이터 분할',
        '클래스 불균형',
        '하이퍼 파라미터 탐색',
        '모델 성능평가'
      ]
    }
  ],
  [
    {
      title: '실전 프로젝트'
    },
    {
      week: '10주차',
      lesson: [
        '1차 프로젝트 강의',
        '1차 프로젝트 수행'
      ]
    },
    {
      week: '11주차',
      lesson: [
        '2차 프로젝트 강의',
        '2차 프로젝트 수행'
      ]
    },
    {
      week: '12주차',
      lesson: [
        '3차 프로젝트 강의',
        '3차 프로젝트 수행'
      ]
    }
  ]
]

console.log(curriculumData[0][0].title)
console.log(curriculumData[1][0].title)
console.log(curriculumData[2][0].title)
console.log(curriculumData[3][0].title)

console.log(curriculumData[0][1].week)
console.log(curriculumData[0][2].week)
console.log(curriculumData[1][1].week)
console.log(curriculumData[1][2].week)
console.log(curriculumData[1][3].week)
console.log(curriculumData[1][4].week)
console.log(curriculumData[2][1].week)
console.log(curriculumData[2][2].week)
console.log(curriculumData[2][3].week)
console.log(curriculumData[3][1].week)
console.log(curriculumData[3][2].week)
console.log(curriculumData[3][3].week)

console.log(curriculumData[0][1].lesson[0])
console.log(curriculumData[0][1].lesson[1])
console.log(curriculumData[0][1].lesson[2])

console.log(curriculumData[0])

const test = document.querySelector('.test');
const input = document.querySelector('.test-input')

test.addEventListener('click', () => {
  input.innerHTML = `<li>${curriculumData[0][0].title}</li>`
})