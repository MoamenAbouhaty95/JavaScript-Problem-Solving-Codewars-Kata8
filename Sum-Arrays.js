/* Write a function that takes an array of numbers and returns the sum of the numbers.
   If the array does not contain any numbers then you should return 0.
   The numbers can be negative or non-integer.
*/

function sum(numbers) {
  let solution = 0;
  for (let i = 0; i < numbers.length; i++) {
    solution += numbers[i];
  }
  return solution;
}
console.log(sum([1, 5.2, 4, 0, -1]));