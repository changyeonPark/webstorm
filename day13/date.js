/*
*   Date의 getTime() : 1970년 1월 1일 0시 0분 0초 000밀리초를 기준으로 new Date()를 실행한
*   시각까지의 지난 시간으로 단위는 밀리초
* */

const date = new Date()
document.write(`${date.toLocaleString()}<br>`) // 2023.11.8 오전 10:11:34

document.write(`${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일<br>`)

// 0 -> 일요일
// 1 -> 월요일
// ..., 6 -> 토요일
document.write(`${date.getDay()}요일 ${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초<br>`)
// 3요일 10시 17분 4초 조건문을 활용하여 일~토요일

document.write(`경과 시간 : ${parseInt(date.getTime() / (1000*60*60*24))}일 경과<br>`)

const date1 = new Date('2022-12-23')
const date2 = new Date(2022, 11, 25)
const dateDiff = date2.getTime() - date1.getTime()
const interval = dateDiff / (1000 * 60 * 60 * 24)
document.write(`두 날짜의 차이는 ${interval}일입니다.<br>`);
