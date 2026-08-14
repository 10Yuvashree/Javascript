//&Array creation using array literal
//*Homogeneous array
let arr = [1, 2, 3, 4, 5]
console.log(arr);

//*Heterogeneous array
let arr1 = ["Yuvashree", 1, true]
console.log(arr1);

//&Array creation using constructor
let arr2 = new Array(1) // Single value inside array considers as length
console.log(arr2);
let arr3 = new Array(1, "Anu", true)
console.log(arr3);

//!Accessing a Elements of array
let arr4 = ["Yuvashree", 1, true]
console.log(arr4[0]);

//? Length
console.log(arr4.length);

//^-----------------------------------------------------------------------------------

//!Static methods
//* from()
let arr5 = Array.from("Yuva")
console.log(arr5);
let arr6 = Array.from({
  name: "Yuva",
  age: 18
})
console.log(arr6);
//*isArray()
let str = "Yuvashree"
console.log(Array.isArray(str));
console.log(Array.isArray(arr5));
//*of()
let arr7 = Array.of(1, 2, 3, 4)
console.log(arr7);
let Arr7 = Array.of(1)//consi ders as value if single value is present
console.log(Arr7);

//^-----------------------------------------------------------------------------------
//!Non-Static methods
//*push
let arr8 = ["Yuvashree", 1, true]
arr8.push("Kavya");
console.log(arr8);
//*pop
arr8.pop();
console.log(arr8);
//*shift
arr8.shift();
console.log(arr8);
//*unshift
arr8.unshift("Tanu");
console.log(arr8);
//*slice(): 
let arr9 = ["Yuvashree", 1, true, 101, 102]
console.log(arr9.slice(3));
console.log(arr9.slice(0, 2));
console.log(arr9.slice(3, 2)); //startindex > endIndex
console.log(arr9.slice(-2));//negative

//*splice()
let arr10 = ["Yuvashree", 1, true, 101, 102]
// let splice = arr10.splice(0, 1, "Alice");
let splice = arr10.splice(0, 1);

console.log(splice);

//*concat()
let concat = ["Yuvashree", 1, true, 101, 102]
console.log(concat.concat("Kavya", "Anu"))

//*reverse()
let rev = ["Yuvashree", 1, true, 101, 102]
console.log(rev.reverse());

//*join
let res = ["Hello", "Welcome", "JavaScript", "World"]
console.log(res.join(""));
console.log(res.join(" "));
console.log(res.join("*"));
console.log(res.join(" , "));

//*indexOf()
let res1 = ["Hello", "Welcome", "JavaScript", "World"]
console.log(res1.indexOf("JavaScript"))

//*lastIndexOf()
let res2 = ["Hello", "Welcome", "JavaScript", "World", "JavaScript"]
console.log(res2.lastIndexOf("JavaScript"))

//*includes()
console.log(res2.includes("World"))
console.log(res2.includes("Worlds"))

//*entries()
console.log(res2.entries())
for (let x of res2) {
  console.log(x)
}
for (let y of res2.entries()) {
  console.log(y)
}
for (let z of res2.keys()) {
  console.log(z)
}

//*sort()
let res3 = ["Hello", "Welcome", "JavaScript", "World", "JavaScript"]
console.log(res3.sort())//ascending
console.log(res3.sort().reverse())//descending

//!sort() for 2digit num logic------> sort((a, b) => a - b)
let res4 = [6, 2, 11, 4, 5]
console.log(res4.sort((a, b) => a - b))


