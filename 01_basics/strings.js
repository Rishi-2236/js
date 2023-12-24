const name="Rishi"
const repocount=50
//console.log(name+" "+repocount+"value"); outdated     
console.log(`Hello my name is ${name} and my repocount is ${repocount}`);


const gamename=new String("rishikesh")
console.log(gamename[0]);
console.log(gamename.charAt(3));
console.log(gamename.indexOf('i'));
console.log(gamename.__proto__);
console.log(gamename.length);


const newString=gamename.substring(0,4)
console.log(newString);

const anotherstring=gamename.slice(-9,9)
console.log(anotherstring);

const newstringone="  rishi  "
console.log(newstringone.trim());

const url="https://rishikesh.com/rishi%20sahoo"
console.log(url.replace('%20','__'));