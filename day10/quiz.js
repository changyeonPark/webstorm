// var text = "outside"
//
// function printScope(){
//     console.log(text)
//     var text = "inside"
//     console.log(text)
// }
//
// printScope()

const result = (function(a, b){
    function init(){
        return doSum(a, b);
    }
    function doSum(a, b){
        return a + b;
    }
    return init();
})(10, 20);
console.log(result);