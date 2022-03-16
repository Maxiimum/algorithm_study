function solution(x, n) {
    let sum = x;
    let result = [];
    
    for ( let i=0; i<n; i++){
        result.push(sum);
        sum += x;
    }
    
    return result;
}
