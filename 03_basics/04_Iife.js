//Immediately Invoked function Expression(IIFE)

function chai() {
  console.log(`DB CONNECTED`);
}
chai();

  //Instead
  //This is how we call IIFE
  (function chai() {// NAMED IIFE
    console.log(`DB CONNECTED`);
  }
)(); //sometimes the main code or block of code get affected by the glbal scope so we use IIFE to avoid that and run it immediately

// (() => {
//     console.log(`DB CONNECTED TWO`);
// })();
((name) => {//IIFE USIGN ARROW FUNCTION
    console.log(`DB CONNECTED TWO ${name}`);
})('rishi');
