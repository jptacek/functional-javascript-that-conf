const sum = (x,y) => x+y;

const sumCurry = x => y => x+y;



console.log (sum (2,1)); // 3
console.log (sumCurry (2)(1));  // 3

let partial = sumCurry(2);
console.log(partial); // returns a function
console.log(partial(1));  // 3

console.log(partial(5)); // 7




