//! filter()

//* element >6 in array
let arr = [1, 2, 30, 5, 6, 40]
console.log(arr);
//^ ----------------------------------------------------------------------------------------------------
let res = arr.filter((value) => value > 6)
console.log(res);

//*print even num and odd num
let even = arr.filter((value) => value % 2 == 0
)
let odd = arr.filter((value) => value % 2 != 0
)
console.log(even);
console.log(odd);

//*Get even no and square it
let evenno = arr.filter((value) => value % 2 == 0
)
  .map((value) => value * value);
console.log(evenno);

//*sum
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(sum);
let sums = 0
//using filter
arr.map((value) => sums += value)
console.log(sums);
