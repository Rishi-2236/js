//Arrays

const myArr = [0, 1, 2, 3, 4, 5];

const myheros=["ironman","captain america","thor"]

const myArr1=[2,3,4,5,6]

console.log(myheros[0]);

//Arrays methods

myArr.push(6)
myArr.push(7)
myArr.pop()//pops the last element
console.log(myArr);

myheros.unshift("hulk","spiderman")//adds elements to the start of the array
myheros.shift()//pops the first element from the array 
console.log(myheros);

console.log(myArr.includes(9));
console.log(myArr.indexOf(5));

const newarr=myArr.join()//converts the array of any type to string type
console.log(newarr);
console.log(typeof(newarr));

//slice , splice

console.log("A", myArr);
console.log(myArr.slice(1,3));

console.log("B",myArr);
console.log(myArr.splice(1,3));
console.log(myArr);//[ 0, 4, 5, 6 ] join the array and exclude the splice range
//NOTE
//splice method affects the original array whereas slice element does not affect the original operation