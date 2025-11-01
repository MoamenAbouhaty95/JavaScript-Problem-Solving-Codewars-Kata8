// Given a random non-negative number,
// you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  let arr = [];
  for (let i of String(n)) {
    arr.push(Number(i));
  }
  return arr.reverse();
}

console.log(digitize(35231));