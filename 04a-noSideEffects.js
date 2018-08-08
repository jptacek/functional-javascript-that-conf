const user = {name: 'smith', age: 35};
console.log(user);  // { name: 'smith', age: 35 }
user.name = 'johnson';
console.log(user);  // { name: 'johnson', age: 35 }

const pi=3.14;
console.log(pi);  // 3.14
pi=2.17;
console.log(pi);  // error TypeError: Assignment to constant variable.


// Const is not about immutability. The only thing
//  that is imutable is the binding

//https://mathiasbynens.be/notes/es6-const