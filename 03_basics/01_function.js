//*********
// const name = "John";
// const greeting = `Hello, ${name}!`;
// console.log(greeting);//*********

function sayMyName() {
  console.log("R");
  console.log("I");
  console.log("S");
  console.log("H");
  console.log("I");
}
//sayMyName()

// function addTwoNumbers(number1,numebr2){//inside brackets are "parameters"
//     console.log(number1+numebr2);
// }

function addTwoNumbers(number1, numebr2) {
  //inside brackets are "parameters"
  let result = number1 + numebr2;
  console.log("rishi");
  return result;
  // console.log("rishi");//this would not be printed becoz acc to function properties aft return statment all codes are unreachable
}

const result = addTwoNumbers(3, "4"); //inside brackets are "arguments"
console.log("result:", result);

function loginUserName(username) {
  if (!username) {
    console.log("please enter a username");
  }
  return `${username} just logged in`;
}

console.log(loginUserName("rishi"));
console.log(loginUserName()); //undefined

// function calculatecartprice(num1="3"){
//     return num1
// }
// console.log(calculatecartprice());//3 bare minimum is 3 and if we update the parameter the it will override the prev value
function calculatecartprice(val1, val2, ...num1) {
  //here ... is rest operator not spread op
  return num1;
}
console.log(calculatecartprice(200, 400, 500, 600)); // num1-200, ...num1-[ 200, 400, 500, 600 ], (val1,val2,...num1)-[ 500, 600 ]
//val1 will store 200 val2-400 and return num1(...num1) will give rest i.e 500,600

const user = {
  username: "rishi",
  price: 200,
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and the price is ${anyobject.price}`
  );
}
handleObject(user);

const myNewArray = [100, 200, 300, 400];
function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myNewArray));
