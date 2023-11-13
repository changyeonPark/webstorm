
function getArrayMaxNumber(arr) {
    // 배열의 최댓값이 리턴 되도록
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]){
            max = arr[i]
        }
        // if (arr[i] < arr[i+1]){
        //     let temp = arr[i];
        //     arr[i] = arr[i+1]
        //     arr[i+1] = temp
        // }
    }
    return max
}

function getArrayMimNumber(arr) {
    // 배열의 최댓값이 리턴 되도록
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]){
            min = arr[i]
        }
    }
    return min
}

const max = getArrayMaxNumber([10, 50, 30])
console.log("최대값 : " ,max)

const min = getArrayMimNumber([10, 50, 30])
console.log("최솟값 : " ,min)