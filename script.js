let result;

if (true) {
  let a = 100;
  const b = 200;
  /*'const' variable holds values that can never be changed */

  result = a + b;
  /* block statement defines a scope, a block of code inside of an 'if' statement or a 'loop'
  
   a and b can only be accessed within the scope of the if statement and not outside. */

}

console.log(result);
console.log(a);
console.log(b);
console.log(c);


/*inside the 'if' statement, unless we use the 'let' or 'const' keywords */
if (true) {
  var d = "inside the if!"

}

console.log(d);