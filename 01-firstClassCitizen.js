// We have a function displayValue

let displayValue = function() {
  let y = 3;
  console.log(`displayValue ${y}`);
};

// We execute displayValue by throwing parens around it
console.log(displayValue); // [Function: displayValue]
console.log(displayValue()); // displayValue 3

// anotherFunc takes a function as a passed in parameter and then executes
// it.
let funcToExecOtherFunc = function(passInFunc) {
  console.log('in call for funcToExecOtherFunc');
  passInFunc();
};

console.log(`call to funcToExecOtherFunc`);
funcToExecOtherFunc(displayValue);
// Return results
/* 
funcToExecOtherFunc
displayValue 3
*/

// myVarFun takes a parameter in function list and displays it
let variableDisplayValue = function(valToDisplay) {
  console.log(`variableDisplayValue ${valToDisplay}`);
};

variableDisplayValue(4); //variableDisplayValue 4
funcToExecOtherFunc(variableDisplayValue); // This errors out

// funcToExecOtherFunc
// variableDisplayValue undefined

// We need to use an anonymous function if we want to pass parameters
funcToExecOtherFunc(function() {
  variableDisplayValue(7);
});

// funcToExecOtherFunc
// variableDisplayValue 7
