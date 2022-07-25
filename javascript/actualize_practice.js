// # 1. Write a method that prints out the numbers 1 to 1000 that are divisible by 3.

// # 2. Write a method that accepts an array of strings and prints out every other string.
// function everyOtherString(strings) {
//  var index = 0;
//   strings.forEach(function(string) {
//     if (index % 2 == 0){
//       console.log(string);
//     }
//     index += 1;
//   })
// }
// everyOtherString(["These", "are", "not", "words"])
// 3. Write a method that accepts an array of numbers and returns the sum.
// function totalSum(numbers) {
//   var sum = 0;
//   numbers.forEach(function(number) {
//     sum = number + sum
//   });
//   return sum;
// }
// console.log(totalSum([1, 3, 4, 5]))
// # 4. Start with the hash: city_populations = {chi: 2700000}
// # 5. Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// # 6. The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
// # 7. Write a method that prints out every number from 1 to 100.
function numberHundred() {
  for (let i = 1; i < 101; i++) {
    console.log(i)
  }
}
numberHundred()
// 8. Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
// # 9. Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.
// # 10. Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.
// # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].
// # 12. Start with the hash: item_amounts = {chair: 5, table: 2}
// # Someone just bought two chairs. Change the hash such that the chair amount is 3.
// # The final result should be: {chair: 3, table: 2}
// # 13. Start with the hash: item_amounts = {chair: 5, table: 2}
// # You received 7 desks to sell. Change the hash to include desks.
// # The final result should be: {chair: 5, table: 2, desk: 7}
// # 14. Write a method that accepts a number and returns its factorial.
// # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
// # 15. Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.
// # For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
