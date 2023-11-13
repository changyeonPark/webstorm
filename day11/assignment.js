/*
*   prompt로 두명의 사용자로부터 가위, 바위, 보를 입력받아
*   누가 이겼는지 결과를 출력하는 프로그램을 작성하시오.
*   출력 결과
*   철수 : 가위
*   영희 : 보
*   결과 : 철수 승!!
* */

const person = {

}

person.chulsoo = prompt("철수 : 가위 바위 보 중 하나를 입력해주세요.");
person.yunghee = prompt("영희 : 가위 바위 보 중 하나를 입력해주세요.");

let result = "";

if (person.chulsoo === "가위" && person.yunghee === "바위"
    || person.chulsoo === "바위" && person.yunghee === "보"
    || person.chulsoo === "보" && person.yunghee === "가위"){
    result = "영희 승"
}  else if (person.chulsoo === person.yunghee){
    result = "비겼습니다."
} else {
    result = "철수 승"
}

document.write(`철수 : ${person.chulsoo}<br>`);
document.write(`영희 : ${person.yunghee}<br>`);
document.write(`결과 : ${result}<br>`);

