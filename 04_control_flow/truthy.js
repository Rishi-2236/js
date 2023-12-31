const userEmail = []//truth value

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//Falsy value

//false,0,-0,BigInt,On,"",null,undefined,NaN

//truthy value values insode string are truth
//"0",'false'," ",[],{},fucntion(){},

//Nullish COalescing Operator (??):null undefined

let val1;
//val1=5??10
//val1=null??10
//val1=undefined??15
val1=null??10??20//fisrt value gets assigned


console.log(val1);

//Terniary Operator ?: