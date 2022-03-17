function solution(x) {
    let arr = x.toString().split("").map(Number);
    let sum = 0;
    
    for (let i of arr) {
        sum += i;
    }
    
     return x % sum === 0 ? true : false;
}
