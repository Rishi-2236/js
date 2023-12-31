var c = 300;
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  //console.log("INNER:",a);
}

//console.log(c);//block scope
//console.log(a);//global scope

function one() {
  const username = "rishi";

  function two() {
    const website = "youtube";
    console.log(username); //child pareent ka variables acces kar sakta hei par parent nahin
  }
  //console.log(website);// we cannot acces the variables of child in parent scope

  two();
}

//  one()

if (true) {
  const username = "rishi";
  if (username == "rishi") {
    const website = "youtube";
    console.log(username + website);
  }
  // console.log(website); error out of the scope
}
// console.log(username); same error

//+++++++++++++++++ intresting +++++++++++++++

console.log(addone(5)); // o/p -6
function addone(num) {
  return num + 1;
}

console.log(addtwo(6)); // error ---- HOISTING
const addtwo = function (num) {// called as expresssion can hold anything like jason value var etc...
  return num + 2;
};
