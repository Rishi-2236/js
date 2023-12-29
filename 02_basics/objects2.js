//singleton

//const tinderUser=new Object()//is a singleton object cause constructors are used
const tinderUser = {}; //non singlton object

tinderUser.id = "12345";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

//username obj created using literals
const username = {
  userfullname: {
    fullname: {
      firstname: "Rishikesh",
      lastname: "Sahoo",
    },
  },
};
console.log(username.userfullname.fullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

const obj4={...obj1, ...obj2,...obj3}//... is the spread syntax
console.log(obj4);
//NOTE
//when we use spread syntax we need to merge the objects using a third obj

const users=[
  
  
  {
    id:1,
    email:"h@gmail.com",
  },
  {

  },
  {

  },
  {

  },
]

users[1].email//uncleared


console.log(tinderUser);

console.log(Object.keys(tinderUser)); //for finding keys in an object :left side are keys and right are values
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course={
  coursename:"js in hindi",
  price:"999",
  courseinsructor:"hitesh"
}

// course.courseinsructor //we can  access the courseinstructor by this syntax also
//DESTRUCTURING
const{courseinsructor}=course//course{jis key ko print karna hai}=kosa object se hai
console.log(courseinsructor);

const{coursename:name}=course
console.log(name);//here we can write name instead of coursename