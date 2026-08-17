//!reduce((prev,curr,index))

let arr = [1, 2, 3, 4, 5, 6]
let res = arr.reduce((prev, curr, index) => {
  console.log(prev);
  console.log(curr);
  console.log("Index----------------------- " + index);
  return prev * curr

})
console.log("------------------------------------------------------------------------------------------------");

//*TO change the prev value then after (},previous value)
let res1 = arr.reduce((prev, curr, index) => {
  console.log(prev);
  console.log(curr);
  console.log("Index----------------------- " + index);
  return prev * curr
}, 10)

//*sum of array
let sum = arr.reduce((prev, curr, index) => {

  return prev + curr
})
console.log("Sum : " + sum);

//* max element in array
let max = arr.reduce((prev, curr, index) => curr > prev ? curr : prev)
console.log("Max : " + max);

//* min element in array
let min = arr.reduce((prev, curr, index) => curr < prev ? curr : prev)
console.log("Min : " + min);

//*product

let prod = arr.reduce((prev, curr, index) => {

  return prev * curr
})
console.log("Product : " + prod);