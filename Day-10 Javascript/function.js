fun(); // function call

function fun() {
  console.log("hello");
} // function definition

// it return undefined
let a = 100; // global variable
function add(a1, b1) {
  let result = a1 + b1; // local variable
  console.log(a);
  console.log(result);
}

add(a, 20);

//console.log(a1);
console.clear();
function sub(a1 = 0, b1 = 0) {
  console.log(a1, b1);
  let result = a1 - b1;
  return result;
}

// NaN => Not a Number

let result = sub(10, 7);
console.log("result", result);

console.clear();

function funOne(callback) {
  callback(10);
  console.log("funOne");
}

funOne(function (varOne) {
  console.log("funTwo", varOne);
});

// we pass  a function as a parameter to other function
// that passed function is called as callback function

// function definition
// function callback

// arrays
let array = [10, 20, 30, 40];
console.log(array.length);

console.log(array[4]);
