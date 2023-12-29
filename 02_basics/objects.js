//singleton
//when obj are declared using literals then singlton nahin banta
//when                        constructers then singleton banta hai 

//object.create-->onj created using constructors

//Object literals

const simpson=Symbol("key1")//symbol creation

const jsUser={
    name:"Rishi",
    //simpson:"xyz",//string type *****
    [simpson]:"xyz",
    age:19,
    location:"cuttack",
    email:"rishi@gmail.com",
    isLoggedin:false,
    lastLoginDays:["Monday","Saturday"]
}
//objects can be accessed by 2 ways

console.log(jsUser.name);

//OR

//console.log(jsUser[location]);//error cause name age location.... are stored as a string type
console.log(jsUser["location"]);//cuttack

//for symbol

// console.log(jsUser["simpson"]);
//console.log(typeof(jsUser.simpson));//string type *****

console.log(jsUser[simpson]);

jsUser.location="bbsr"//override the prev name simply using =
console.log(jsUser);

Object.freeze(jsUser)//after we use this method no change can further be done in the targeted block

jsUser.email="fhenhbeuf@mail.com"
console.log(jsUser);
