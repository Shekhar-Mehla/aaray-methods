const str = "hello word";
console.log(str);
// array method and their work.
// to string method:it convers the array to the list.
const array = [1, 2, 3, 4, 5];
console.log(array);
const Newstr = array.toString();
// we need to store the output in new variable because it does not modify the current array.

console.log(Newstr);

// adding items to the array
//  unshift,push,splice
array.unshift(7);
console.log(array);
// output =  [7, 1, 2, 3, 4, 5]
// it adds the item to the array in the beggining. Note:it modify the original array.
array.push(7);
console.log(array);
// output =  [7, 1, 2, 3, 4, 5,7] it adds the item at the end of the array.
array.splice(3, 0, 5678);
console.log(array);
/*
output= (8) [7, 1, 2, 5678, 3, 4, 5, 7]
 with the help of splice we can add the item wherever we like. it takes three arguements.
 first: where to insert the item(index number)
second: if you want to delete any item after that. iif you dont want to delelte just keep its value to zero.
third:what you wnat to insert.

*/

// deleting items  for the array.
// pop, shift, splice.

array.pop(7);
console.log(array);
/* output: [7, 1, 2, 5678, 3, 4, 5]
it has deleted the item from the end of the array.

*/
array.shift(7);
console.log(array);

/* output: [ 1, 2, 5678, 3, 4, 5]
it has deleted the item from the starting of the array.

*/
array.splice(2, 3);
console.log(array);
const splice_ = array.splice(2, 3);
console.log(splice_);
/* it is very important method to understand
it only takes two argument.
1. where to start deleting
2. how many items to delete.
expample:
const array = [12,3,4,5,67,7,9]
const Splice_ = array.splice(10)
if only one argument is give there will be no change in the array.
const splice_ = array.splice(2,3)
now 
array = [12,3,7,9] it has modified the original array.
splice = [4,5,67] it  has made new array for the deleted item from the original array.
*/
/*search item from the array  */
const search_ = array.includes(2);
console.log(array);
console.log(search_);
/* it search the items from the array and return the boolean value besed on the result
expample:
const array = [1,2,3,4,5]
const search = array.includes(2)
output will be true because 2 is in the array.
const search = array.includes(10)
output will be false because 10 is not in the array.
*/
// join method
const join_ = array.join("/");
console.log(join_);
/* join method is not only convert the array to string but also give us the more control to add seprator in the string which can be helpful to convert back in array in the same pattern. */

// new challaenga for javascripts arrays.

// / Challange #1
// 1. create an array of 50 random numbers range between 1 and 100 programmatically

const Numlist = [];
for (let i = 0; i < 50; i++) {
  let randumNumber = Math.floor(Math.random() * 100);
  Numlist.push(randumNumber);
}
console.log(Numlist);

//2. sort the array in descending order

const SortedArray = Numlist.sort();
console.log(SortedArray);
const desendingArray = SortedArray.reverse();
console.log(desendingArray);

//3. get total of the array
const SumOfArray = desendingArray.reduce((sum, itemvalue) => {
  return sum + itemvalue;
}, 0);
console.log(SumOfArray);

//4.Divide original array in to 2 new arrays that contains even or odd numbers only each.
// note this is the original array i just copy pasted from console
// const originalArray = [
//   21, 47, 62, 78, 20, 33, 83, 33, 10, 1, 71, 19, 72, 74, 45, 85, 85, 10, 43, 31,
//   57, 83, 87, 50, 83, 62, 89, 66, 17, 70, 96, 28, 71, 91, 74, 55, 85, 61, 52,
//   29, 5, 2, 49, 51, 4, 79, 10, 44, 85, 4,
// ];
// const oddNumber = originalArray.filter((item) => !(item % 2 === 0));
// console.log(oddNumber);
// // output is
// // oddNumber =(20) [62, 78, 20, 10, 72, 74, 10, 50, 62, 66, 70, 96, 28, 74, 52, 2, 4, 10, 44, 4]

// const evenNumber = originalArray.filter((item) => item % 2 === 0);
// console.log(evenNumber);

// /*
// output is
// evenNumber = [62, 78, 20, 10, 72, 74, 10, 50, 62, 66, 70, 96, 28, 74, 52, 2, 4, 10, 44, 4]

// 5. remove duplicate number for the original array

// const originalArray = [
//   21, 47, 62, 78, 20, 33, 83, 33, 10, 1, 71, 19, 72, 74, 45, 85, 85, 10, 43, 31,
//   57, 83, 87, 50, 83, 62, 89, 66, 17, 70, 96, 28, 71, 91, 74, 55, 85, 61, 52,
//   29, 5, 2, 49, 51, 4, 79, 10, 44, 85, 4,
// ];
// const uniq = [];
// const UniqueArray = originalArray.filter((item) => {
//   if (uniq.includes(item)) {
//     return false;
//   } else {
//     uniq.push(item);
//   }
// });
// console.log(uniq);
// // output
// // uniq = (38) [21, 47, 62, 78, 20, 33, 83, 10, 1, 71, 19, 72, 74, 45, 85, 43, 31, 57, 87, 50, 89, 66, 17, 70, 96, 28, 91, 55, 61, 52, 29, 5, 2, 49, 51, 4, 79, 44]

// // Challange #2 create unique array 50 numbers rang between 1 and 100 programmatically
const Uniquelist = [];
for (let i = 0; Uniquelist.length < 50; i++) {
  const radndonum = Math.floor(Math.random() * 100);
  if (!Uniquelist.includes(radndonum)) {
    Uniquelist.push(radndonum);
  }
}
console.log(Uniquelist);
