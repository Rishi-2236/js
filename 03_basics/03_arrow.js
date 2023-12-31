const user={
    username:"Rishi",
    price: 199,

    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`);//we use this to acces the variable of same scopeof current context
        console.log(this);
    }

}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log(this);//empty array

// function chai() {
//     let username="rishi"
//     console.log(this.username);
// }
// chai()

// const chai=function () {
//     let username="rishi"
//     console.log(this.username);
// }

const chai=()=> {//arrow fucntion
    let username="rishi"
    console.log(this.username);
}

const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4));

