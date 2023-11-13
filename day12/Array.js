const arr = [14, 10, 20, 30, 40, 78, 18, 23, 84]
let sum = 0;
arr.forEach( function (num) {
    sum += num
})
console.log(sum)

arr2 = arr.filter((value) => value < 50)
arr3 = arr.filter((value) => value < 50).map(value => value+100)

console.log("arr2 : ", arr2)
console.log("arr3 : ", arr3)

let findNumber = arr.find(value => value < 20)
console.log(findNumber)

arr4 = arr.join("##")
console.log("arr.join('##'): ",arr4)

arr5 = arr4.split("##")
console.log("arr.split('##'): ",arr5)


