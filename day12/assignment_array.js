/*
*   문제 1. 사람 이름을 계속 입력 받아 배열에 저장하고
*   그 저장된 이름을 출력하는 프로그램을 작성하시오.
*   (단, 입력의 마지막은 null이나(취소버튼)이나 ""(공백문자)를
*   입력했을 때로 한다.
* */

let nameArr = [];
while (true) {
    let input = prompt("이름을 입력해주세요.", "");

    if (input == null || input === "") {
        break;
    }
    nameArr.push(input)

}

nameArr.forEach(value => document.write(value + "<br>"))


/*
*   문제 2. 서로 중복되지 않은 정수 5개를 입력 받아
*   출력하는 프로그램을 작성하시오.
*   프롬프트로 입력받기
*   예제
*   숫자 입력하세요. => 5
*   숫자 입력하세요. => 10
*   숫자 입력하세요. => 10 => 다시 입력하세요(alert)
*   숫자 입력하세요. => 15
* */

let numArr = []

while (numArr.length < 5) {
    let inputNum = prompt("정수를 입력해주세요.", "0")
    let numbers = parseInt(inputNum);

    if (numArr.includes(numbers)) {
        alert("중복되었습니다. 다시 입력해주세요.")
    } else {
        numArr.push(numbers)
    }
}

console.log("numArr.sort() : ", numArr.sort())
