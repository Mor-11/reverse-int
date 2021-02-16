module.exports = function reverse(n) {
    let arr = [],
        a = Math.abs(n); //создаем пустой массив и делаем число положительным
    let arrs = a.toString().split(""); //делаем число стракой, а дальше массивом
    for (let i = arrs.length - 1; 0 <= i; i--) { //перебираем массив с конца и добавляем в массив
        arr.push(arrs[i]);
    }
    return +arr.join(""); //дадаем массив числом
};
