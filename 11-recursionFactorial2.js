const factorial = (n, accum=1) => {
    console.log(`factorial(${n},${accum})`);
    if (n<2) {
        return accum;
    }

    return factorial(n-1,n*accum);


}

console.log(factorial(4));