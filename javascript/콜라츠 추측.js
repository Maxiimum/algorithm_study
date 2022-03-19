function solution(num) {
    
    let cnt = 0;
    
    while (true){
        if (num === 1) { return cnt;}
        
        if (num%2 === 0) {
            num /= 2;
            cnt++;
        } else if (num%2 === 1) {
            num = num*3+1;
            cnt++;
        }

        if (cnt === 500) { break;}
    }
    return -1;
}
