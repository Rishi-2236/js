const score=400
console.log(score);

const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(3));

const othernum=1125.899
console.log(othernum.toPrecision(3));//1.13e+3

const othernum1=125.899
console.log(othernum1.toPrecision(3))//126


const hundreds=1000000
console.log(hundreds.toLocaleString())//1,000,000

const hundreds1=1000000
console.log(hundreds1.toLocaleString('en-IN'));//10,00,000


//+++++++++++++++++++++ MATHS +++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));//- to +
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.3));//5
console.log(Math.floor(3.6));//3
console.log(Math.min(4,5,7,2,4,1));
console.log(Math.max(2,3,4,56,3,2,));

console.log(Math.random());//value varries from 0-1
console.log((Math.random()*10)+1);//when we add 1 the random value  generated will not be 0
console.log(Math.floor((Math.random()*10)+1));

const min=10
const max=20

console.log(Math.random() * (max - min + 1) + min);