let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// new way

arrEven = arr.filter((val) => {
    return val %2==0 ;
  });

// [ 2, 4, 6, 8, 10 ]
console.log(arrEven);

const isOdd = function(number) {
    return number %2==1;
}

arrOdd = arr.filter(isOdd);

// [ 1, 3, 5, 7, 9 ]
console.log(arrOdd);


