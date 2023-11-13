/*
*   1. 인공지능 컴퓨터와 가위, 바위, 보 게임을 할 수 있는
*       프로그램을 작성하시오.
*       ( 컴퓨터는 랜덤으로 하고, 사용자는 promt로 입력을 받아서 처리 )
* */

// const computerRand = function () {
//     let rand = Math.floor((Math.random() * 3) + 1)
//     let result = ""
//     if (rand == 1) {
//         result = "가위"
//     } else if (rand == 2) {
//         result = "바위"
//     } else if (rand == 3) {
//         result = "보"
//     }
//     return result;
// }
//
//
// while (true) {
//
//     let computer = computerRand();
//
//     let user = prompt("가위 바위 보 입력해주세요.", "가위")
//
//     if (user === computer) {
//         alert(`사용자 : ${user} | 컴퓨터 : ${computer} = 비겼습니다.`)
//         alert(`다시 입력해주세요.`)
//     } else if (user === "가위" && computer === "바위"
//         || user === "바위" && computer === "보"
//         || user === "보" && computer === "가위") {
//         alert(`사용자 : ${user} | 컴퓨터 : ${computer} = 컴퓨터 승!`)
//         break
//     } else {
//         alert(`사용자 : ${user} | 컴퓨터 : ${computer} = 사용자 승!`)
//         break
//     }
// }

/*
*   2. 로또 번호를 생성하는 프로그램을 작성하시오. ( 1 ~ 45번 중 6개의 번호를 추첨 )
* */

let lotto = []

// while (lotto.length < 45){
//     let rand = Math.floor((Math.random() * 45) +1)
//
//     if (!lotto.includes(rand)){
//         lotto.push(rand);
//     }
// }

for (let i = 1; i <= 45; i++) {
    lotto.push(i)
}

document.write(`lotto 1~45 :  ${lotto}<br>`)

for (let i = 0; i < lotto.length; i++) {
    let rand = Math.floor((Math.random() * 45));
    [lotto[i], lotto[rand]] = [lotto[rand], lotto[i]]
    // let temp = lotto[i]
    // lotto[i] = lotto[rand]
    // lotto[rand] = temp
}

let lottoNum = []
for (let i = 0; i < 6; i++) {
    lottoNum.push(lotto[i])
}
document.write(`로또 생성 번호 : ${lottoNum}<br>`)

const student = {
      studentName : "홍길동"
    , subject : ["자바", "DB"]
    , studentNumber : 1
}

let {
    studentName, subject, studentNumber
} = student
document.write(`${student["studentName"]}<br>`)
document.write(`재할당 : ${studentName}<br>`)