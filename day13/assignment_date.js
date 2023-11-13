/* 1. 2020년 1월 1일부터 오늘까지의 날짜 수를 계산하는 프로그램을 작성하시오. */

const todayDate = new Date();
const todayDateFormat = new Date(`${todayDate.getFullYear()}-${todayDate.getMonth()+1}-${todayDate.getDate()}`)
const respDate = new Date('2020-1-1');

const dateDiff = todayDateFormat.getTime() - respDate.getTime()
const interval = dateDiff / ( 1000 * 60 * 60 * 24)

document.write(`2020년 1월 1일부터 오늘까지 경과 날짜 : ${interval}일<br>`)

/* 2. 오늘부터 500일 후의 날짜를 출력하는 프로그램을 작성하시오. */

const fivehundredDay = new Date(todayDate.getTime() + 500 * (1000 * 60 * 60 * 24))

document.write(`오늘부터 500일 후 날짜 : ${fivehundredDay.toLocaleDateString()}<br>`)


/*
*   3. 올해도 크리스마스가 얼마 남지 않았습니다.
*       올해 크리스마스를 100일째 되는 날로 보내려면
*       언제 사귀기 시작해야 했을까요?
*       그리고 내년 크리스마스를 300일로 보내려면
*       언제 사귀기 시작해야 할까요?
* */

const christmas = new Date('2023-12-25')
const dDay100 = new Date(christmas.getTime() - (100 - 1) * (1000 * 60 * 60 * 24))
document.write(`크리스마스 d-day 100일 : ${dDay100.toLocaleDateString()}<br>`)

const christmas1 = new Date('2024-12-25')
const dDay300 = new Date(christmas1.getTime() - (300 - 1) * (1000 * 60 * 60 * 24))
document.write(`크리스마스 d-day 300일 : ${dDay300.toLocaleDateString()}`)
