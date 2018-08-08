// old way

let arr = [1, 2, 3, 4];
let arrPlus5 = [];
for(let i = 0; i < arr.length; i++) {
    arrPlus5[i] = arr[i] + 5;
}
// arrPlus5 = [6,7,8,9]

console.log(arrPlus5);

// new way

arrPlus5New = arr.map((val) => {
    return val + 5;
  });

// arrPlus5New = [6,7,8,9]

console.log(arrPlus5New);

arrDouble = arr.map((val) => {
    return val*2; 
});

// [ 2, 4, 6, 8 ]
console.log(arrDouble);


// map to create new obect
newObject = arr.map((val, i) => {
   return {value: val, loc:i};
  });

//   [ { value: 1, loc: 0 },
//     { value: 2, loc: 1 },
//     { value: 3, loc: 2 },
//     { value: 4, loc: 3 } ]

console.log(newObject);


