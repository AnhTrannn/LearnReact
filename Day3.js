// //declare function
// function sum(a, b) {
//     return a + b; 
// }
// sum(1,2);

// //iffe function
// const sum = ((a, b) => {
//     return a + b;
// })(1, 2);

//Date()
const date = Date();
console.log(date.toString());

// Callback()
function createStudent(name, age, callBack) {
    const student = {name, age};
    callBack();
    return student;
}

createStudent('Son', 12, () => {
    console.log('Hello');
});

//Array reduce()
// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.

const num = [1.2, 2.3, 3.4, 5.6];
document.getElementById("demo").innerHTML = num.reduce(getSum, 0);

function getSum(total, num) {
    return total + Math.round(num);
}

// The find() method returns the value of the first element that passes a test.

const ages = [6, 8, 18, 23, 20];

function checkAge(age) {
    return age > 18;
}
document.getElementById("demo1").innerHTML = ages.find(checkAge);

// Some method
// The some() method checks if any array elements pass a test (provided as a callback function).
document.getElementById("demo2").innerHTML = ages.some(checkAge);

// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.
// every() method
document.getElementById("demo3").innerHTML = ages.every(checkAge);

// map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.
const numbers = [4, 9, 16, 25];
document.getElementById("demo4").innerHTML = numbers.map(Math.sqrt);

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
document.getElementById("demo5").innerHTML = ages.filter(checkAge);
