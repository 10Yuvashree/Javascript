//*map()
let arr = [10, 20, 30, 40]
arr.map((value, index, array) => {
  console.log("Value of an array " + value);
  console.log("Index of an array " + index);
  console.log(" Original array " + arr);

})

let newArray = arr.map((value, index, array) => {
  // return value + 1;
  return index + 10;

})
console.log(newArray);
console.log(arr);

// * for loop v/s map()
let arr1 = [10, 20, 30, 40]
let result = []
for (let i = 0; i < arr1.length; i++) {
  result.push(arr1[i] * 2)
}
console.log(result);

let res = arr1.map((value) => value * 2)
console.log(res);

//*print only odd num
let res1 = arr1.map((value) => {
  if (value % 2 != 0) {
    console.log(value);
  }
});
console.log(res1);

let res2 = arr1.map((value) => value.toString())
console.log(res2);

//*add** to each element
let arr2 = ["red", "green", "black", "white"]
let res3 = arr2.map((value) => value.padStart(5, "**")

)
console.log(res3);
//*element>6
let arr3 = [1, 2, 30, 40]
let res4 = arr3.map((value) => {
  if (value > 6) {
    console.log(value);

  }
}
)
console.log(res4);