(() => {
  const applyInfo = [
    {
      GENERATION: 14,
      COURSE_START_DATE: moment('2022-10-21'),
    },
    {
      GENERATION: 15,
      COURSE_START_DATE: moment('2022-11-11'),
    },
    {
      GENERATION: 16,
      COURSE_START_DATE: moment('2022-11-25'),
    },
    {
      GENERATION: 17,
      COURSE_START_DATE: moment('2022-12-09'),
    },
    {
      GENERATION: 18,
      COURSE_START_DATE: moment('2022-12-23'),
    },
    {
      GENERATION: 19,
      COURSE_START_DATE: moment('2022-12-28'),
    },
    {
      GENERATION: 20,
      COURSE_START_DATE: moment('2023-01-04'),
    },
    {
      GENERATION: 21,
      COURSE_START_DATE: moment('2023-01-11'),
    },
    {
      GENERATION: 22,
      COURSE_START_DATE: moment('2023-01-18'),
    },
    {
      GENERATION: 23,
      COURSE_START_DATE: moment('2023-01-24'),
    },
    {
      GENERATION: 24,
      COURSE_START_DATE: moment('2023-02-01'),
    },
    {
      GENERATION: 25,
      COURSE_START_DATE: moment('2023-02-07'),
    },
  ];

  /**
   * 현재 날짜와 비교해서 현재에 해당하는 기수의 index를 구하는 함수입니다.
   * 수강시작일 -24시간(모집마감일)의 값이 양수인 index를 구합니다.
   */
  const setCurrentIndex = applyInfo => {
    const _today = moment();
    return applyInfo.findIndex(
      i => i.COURSE_START_DATE.diff(_today, 'hours') > 24,
    );
  };

  /**
   * 현재 기수의 여러가지 변수를 설정하는 함수입니다.
   *
   * 기수(GENERATION), 수강시작일(COURSE_START_DATE): applyInfo에서 가지고 옴
   * 모집시작일(STARTING_DATE): 이전 기수가 있을 때 그 기수의 수강시작일에서 24시간을 뺸 값을 설정하고, 이전 기수가 없을 때는 오늘 날짜를 할당한다.
   * 모집마감일(CLOSING_DATE): 수강시작일에서 -24시간을 뺀 값을 할당한다.
   */
  const setCurrentInfo = applyInfo => {
    const index = setCurrentIndex(applyInfo);
    const _COURSE_START_DATE = applyInfo[index].COURSE_START_DATE.format();
    const _STARTING_DATE =
      index >= 1
        ? applyInfo[index - 1].COURSE_START_DATE.subtract(24, 'hours')
        : moment();

    return {
      GENERATION: applyInfo[index].GENERATION, // 기수
      COURSE_START_DATE: applyInfo[index].COURSE_START_DATE, // 수강 시작일
      STARTING_DATE: _STARTING_DATE, // 모집 시작일
      CLOSING_DATE: moment(_COURSE_START_DATE).subtract(24, 'hours'), // 모집 마감일
      COURSE_DAYS: 90, // 수강기간 (90일)
    };
  };

  const currentInfo = setCurrentInfo(applyInfo);

  const applyButtonList = document.querySelectorAll('.apply-button');
  const floatingContainer = document.querySelector('.time ul');
  const generation = document.querySelector('.generation');

  // 모집기간, 수강기간 세팅
  function setCourseInfo() {
    const recruitmentPeriod = document.querySelector('.recruitment-period');
    const coursePeriod = document.querySelector('.course-period');

    // 모집기간
    const _STARTING_DATE = currentInfo.STARTING_DATE.format('YYYY.MM.DD');
    const _CLOSING_DATE = currentInfo.CLOSING_DATE.format('YYYY.MM.DD');
    // recruitmentPeriod.innerHTML = `${_STARTING_DATE} ~ ${_CLOSING_DATE}`;
    recruitmentPeriod.innerHTML = `모집 기간: ${_CLOSING_DATE}까지`;
    // 수강기간
    const _COURSE_START_DATE =
      currentInfo.COURSE_START_DATE.format('YYYY.MM.DD');
    const _COURSE_END_DATE = currentInfo.COURSE_START_DATE.add(
      currentInfo.COURSE_DAYS,
      'd',
    ).format('YYYY.MM.DD');
    // coursePeriod.innerHTML = `${_COURSE_START_DATE} ~ ${_COURSE_END_DATE}`;
    coursePeriod.innerHTML = `12주`;
  }

  setCourseInfo();

  // 모집 마감일 세팅
  function setRemainingPeriod() {
    const today = moment();
    const remainingPeriod = moment.duration(
      currentInfo.CLOSING_DATE.diff(today),
    );

    if (remainingPeriod >= 0) {
      generation.innerHTML = `<span>${currentInfo.GENERATION}</span>기 모집마감까지`;

      floatingContainer.innerHTML = `
          <li><span class="back">${remainingPeriod.get('days')}</span><span>일<span></li>
          <li><span class="back">${remainingPeriod.get('hours')}</span><span>시간<span></li>
          <li><span class="back">${remainingPeriod.get('minutes')}</span><span>분<span></li>
          <li><span class="back">${remainingPeriod.get('seconds')}</span><span>초<span></li>
      `;
    } else {
      generation.innerHTML = `<span>${GENERATION}</span>기 신청이 종료되었습니다. `;
      // floatingContainer.innerHTML = `<small>다음 기수를 기다려주세요!</small>`;
    }
  }

  setRemainingPeriod();
  window.setInterval(setRemainingPeriod, 1000);

  applyButtonList.forEach(button => {
    button.addEventListener('click', () => {
      window.location = '/kdc/form';
    });
  });
})();
