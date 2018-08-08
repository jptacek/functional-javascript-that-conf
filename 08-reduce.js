let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = arr.reduce((acc,value) => {
    return acc+value;
});

// 55
console.log(sum);

// Vary the starting condition
const sumInitValue = arr.reduce((acc,value) => {
    return acc+value;
},100);

// 155
console.log(sumInitValue);

// We have functions, so we can make more interesting
const average = arr.reduce((total, value, index) => {
    total += value;
    if (index === arr.length - 1) {

        return total / arr.length;
    }
    else {
        return total;
    }
});

// 5.5
console.log(average)

//More complex sample

const chemData = require('./data/periodic.json');

const elemCount = chemData.reduce( (tally, chemElement) => {
    tally[chemElement.type] = (tally[chemElement.type] || 0) + 1 ;
    return tally;
  } , {})

//   { 'Non Metal': 7,
//   'Noble Gas': 6,
//   'Alkali Metal': 6,
//   'Alkaline Earth Metal': 6,
//   Metalloids: 7,
//   Halogen: 5,
//   'Poor Metal': 7,
//   'Transition Metal': 29,
//   'Rare Earth Metal': 23 }
  console.log(elemCount);