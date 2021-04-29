function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const nowTime = new Date();

  const 밀리세컨드차이 = xmasDay - nowTime
  // console.log(밀리세컨드차이})

  const 초차이 = 밀리세컨드차이 / 1000
  // console.log(초차이)

  const 분차이 = 초차이 / 60
  // console.log(분차이)

  const 시간차이 = 분차이 / 60
  // console.log(시간차이)

  const 일차이 = 시간차이 / 24
  // console.log(일차이)


  const 일차이정수 = parseInt(일차이)
  // console.log(일차이정수)

  const 시간차이정수 = parseInt(시간차이 - 일차이정수 * 24)
  // console.log(시간차이정수)

  const 분차이정수 = parseInt(분차이 - (일차이정수 * 24 * 60) - (시간차이정수 * 60))
  // console.log(분차이정수)

  const 초차이정수 = parseInt(초차이 - (일차이정수 * 24 * 60 * 60) - (시간차이정수 * 60 * 60) - (분차이정수 * 60))
  // console.log(초차이정수)

  console.log(`크리스마스이브까지 ${일차이정수}일 ${시간차이정수}시간 ${분차이정수}분 ${초차이정수}초 남았습니다.^^`)

  const timeZone = document.querySelector("h2")
  timeZone.innerText = `크리스마스이브까지 ${일차이정수}일 ${시간차이정수}시간 ${분차이정수}분 ${초차이정수}초 남았습니다.^^`

}

function init() {
  setInterval(getTime, 1000)
}

init();
