// document.write("5초 뒤에 내용이 추가될 예정임<br>")
// setTimeout(function (){
//     document.write("추가됨")
// }, 5000)


// setInterval(function(){
//     const today = new Date()
//     document.close()
//     document.write(`${today.toLocaleTimeString()}`)
// }, 1000)

const popup = window.open("Date.html", "popup", "width=200, height=100")

pupup.document.write("새롭게 만든 팝업 내용 입니다.")