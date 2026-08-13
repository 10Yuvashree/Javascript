//*Strings in JavaScript
let str = "Javascript"
console.log(str);
console.log(typeof str);

let str1 = `Javascript`
console.log(str1);
console.log(typeof str1);

let str2 = 'Javascript'
console.log(str2);
console.log(typeof str2);

let name = "Yuvashree";
let age = 22;

console.log("My name is ${name} my age is ${age}");//String Interpolation and template literal

let data = new String("Yuvashree")
console.log(data);
console.log(typeof data);
console.log(data.length);
console.log(data.indexOf(data.length - 1));
console.log(data.length - 1);
//*String static methods
let out = String.fromCharCode(74, 97, 118, 97, 83, 99, 114, 105, 112, 116)
console.log(out);

let out1 = String.raw`Hello/nWorld`
console.log(out1);

//&String NON-static method
let out2 = "Javascript";
console.log(out2.at(1));
console.log(out2.at(-1));

//*CharAt only positive index
console.log(out2.charAt(2));
console.log(out2.charAt(-2));

//&charCodeAt  codePointAt
console.log(out2.charCodeAt(1));
console.log(out2.codePointAt(1));
//&concat
let s1 = "Hello";
let s2 = "World";
console.log(s1.concat(" ", s2));

//!includes()
let result = "Welcome to Javascript"
console.log(result.includes("to"));
console.log(result.includes("to", 9));

//~indexOf(substring,startindex)
console.log(result.indexOf("to"));
console.log(result.indexOf("to", 7));

//?lastIndexOf()
console.log(result.lastIndexOf("to"));

//*split()
let data1 = "Welcome to JavaScript to learn"
console.log(data1.split());
console.log(data1.split(" "));
console.log(data.split("o"));

//*toUpperCase toLowerCase
let data2 = "Helloworld"
console.log(data2.toLowerCase());
let data3 = "Hello"
console.log(data3.toUpperCase());

//& trim()
let data4 = " Hello "
console.log(data4.trim());
console.log(data4.length);
console.log(data4.trim().length);

//& trimStart()
let data5 = "   World   "
console.log(data5.trimStart());
console.log(data5.trimEnd());

//*startsWith() endsWith
let data6 = "Welcome to JavaScript to learn"
console.log(data6.startsWith("Welcome"));
console.log(data6.startsWith("Welcome", 4));
console.log(data6.endsWith("learn"));

//*repeat()
console.log(data6.repeat(2));

//& padStart(indexposition,String) padEnd()
let data7 = "Hello"
console.log(data7.padStart(6, "A"));
console.log(data7.padStart(10, "A"));
console.log(data7.padEnd(6, "B"));

//*replace() 
let data8 = "Welcome to JavaScript and JavaScript is Frontend Language "
console.log(data8.replace("JavaScript", "React"));
//*replaceAll()
console.log(data8.replaceAll("JavaScript", "React"));

//*toString()
let data9 = new String("Hello")
console.log(typeof data9);//object

console.log(typeof data9.toString());//string




















