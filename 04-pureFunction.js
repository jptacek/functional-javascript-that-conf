

const getLogFileNamePure = (currentDate) => {
    let logName = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDay()}-${currentDate.getHours()}-${currentDate.getSeconds()}-${currentDate.getMilliseconds()}.log`;
    return logName;
}
var thatDate = new Date('2018-08-06T10:10:00');
console.log(getLogFileNamePure(thatDate));  // 2018-7-1-10-0-0.log
