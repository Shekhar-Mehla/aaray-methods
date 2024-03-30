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
