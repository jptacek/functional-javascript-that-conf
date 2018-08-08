const createAdder = (x) => {
    // HIgher order function beause it creates a function
    //   X is a closure. We are closing over the X value
    return (y) => x+y;
};


const add3 = createAdder(3);

console.log(add3(2));  // 5
console.log(add3(3));  // 6

// Create a function that increments the count local
const countPlus = () => {
    let count = 0;
    return () => count++;
}

const counting = countPlus();
// We preserve the value of the counting variable in each of our calls 
//   with the function being declared
console.log(counting());  // 0
console.log(counting());  // 1
console.log(counting());  // 2


// When we call the base function each time, the var is reinitiated
console.log(countPlus()()); // 0
console.log(countPlus()()); // 0
console.log(countPlus()()); // 0


// We can continue to embed functions with a call and the 
//  variables will be available throughout the scope
const addThreeNumbersFunc = function(x){
    return function(y) {
        return function(z) {
            return x+y+z;
        }
    }
}

//
console.log(addThreeNumbersFunc(1)(2)(3));  // 6

//  We can do the same call, but much more explicitly using fat arrow 
//   functions.
 const addThreeNumbers = (x) => (y) => {return (z) =>  x+y+z};

console.log(addThreeNumbers(1)(2)(3)); // 6
