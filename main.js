const input = document.getElementById('input');
const list = document.getElementsByClassName('list');

console.log(list);

const arr = [...list];
arr.push('Hello');
console.log(arr);

