//JavaScript Promises are used to handle asynchronous operations JavaScript

// A JavaScript Promise object can be:
// Pending
// Fulfilled
// Rejected

// The Promise object supports two properties: state and result.
// While a Promise object is "pending" (working), the result is undefined.
// When a Promise object is "fulfilled", the result is a value.
// When a Promise object is "rejected", the result is an error object.
//Promise.then() takes two arguments, a callback for success and another for failure.

//The Promise.resolve() static method "resolves" a given value to a Promise
//If the value is a promise, that promise is returned; if the value is a thenable, 
//Promise.resolve() will call the then() method with two callbacks it prepared; otherwise the returned promise will be fulfilled with the value.

//The Promise.reject() static method returns a Promise object that is rejected with a given reason

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 3;

    if (x==0) {
        myResolve("Ok");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
);

//Using Callback
setTimeout(function() { myFunction("Wait a minutes"); }, 3000);

function myFunction(value) {
  document.getElementById("wait").innerHTML = value;
}

//The Promise.all() static method takes an iterable of promises as input and returns a single Promise
//browse all but return as soon as a Promise returns Rejected
//Promise.allSettled returns a resolved promise when all the given Promises have been resolved or rejected.
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    document.getElementById("methodAll").innerHTML = values;
});

//Promise.any() static method takes an iterable of promises as input and returns a single Promise.
//This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value.
//Promise.any return as soon as a Promise has Fulfilled state regardless of multiple Promises will return Rejected
Promise.any([promise1, promise2, promise3]).then((values) => {
    document.getElementById("methodAny").innerHTML = values;
});

//Promise.race returns as soon as the first Promise returns regardless (Rejected or Fulfilled)
const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });
  
  Promise.race([p1, p2]).then((values) => {
    document.getElementById("methodRace").innerHTML = values;
    // Both resolve, but promise2 is faster
  });
