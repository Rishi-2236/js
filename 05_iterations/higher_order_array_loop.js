const arr=[1,2,3,4,5]

for (const num of arr) {
   // console.log(num);//we have to write the iterator insode the console log
}

const string='homelander rishi'

for (const str of string) {
   // console.log(`the charecter is ${str}`);
}

//maps 
const map=new Map() // map is the referance using which we can access any method 
map.set('In',"india")//('key',"value")
map.set('usa',"United States Of America")
map.set('Fr',"France")

//console.log(map);

for (const [key,value] of map) {
   //console.log(key,':-',value);
}

// const myobject={
//    'game1':'valorant',
//    'game2':'nfs'
// }
// for (const [key,value] of myobject) {
 //    console.log(key,':-',value);
 // }//obj are not iterable

const myobject={
   'js':"javascript",
   cpp:'c++',
   rb:'ruby',
   swift:'swift by apple'
}
//for in loop used for iterating objects
for (const key in myobject) {
  //console.log(`${key} is the shortcut for ${myobject[key]}`);
}

const programming=["js","css","rb","java"]

for (const key in programming) {
  //console.log(programming[key]);
}

const programmings = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
const coding=["js","ruby","java","python","cpp"]

coding.forEach( function (val){
       //console.log(val);
    } )
    //or
coding.forEach( (item)=> {
    //console.log(item);
})
//or
coding.forEach((item,index,arr)=>{
   console.log(item,index,arr);
})
