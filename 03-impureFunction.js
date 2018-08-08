const external = [1,2,3]

const impure = (value) => {
    let result = value + external.length;
    external.push(result);
    return result;
}

console.log(impure(4)); // 7
console.log(impure(4)); // 8


// Both calls have same params but results different
//    Not a pure function because of external state


//    Also creates side effects
//  

const getLogFileName = () => {
    let currentDate = new Date();
    let logName = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDay()}-${currentDate.getHours()}-${currentDate.getSeconds()}-${currentDate.getMilliseconds()}.log`;
    return logName;
}

console.log(getLogFileName());  // 2018-6-30-6-44-859.log
console.log(getLogFileName());  // 2018-6-30-6-55-121.log










