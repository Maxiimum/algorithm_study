function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)

    let bin = N.toString(2).split("");

    let cnt_1 = 0;
    let cnt_0 = 0;
    let max = 0;
    let pre_max = 0;

    for(let i=0; i<bin.length; i++){  
        
        if(bin[i] === '1'){
            cnt_1++;                   
            cnt_0 = 0;                  
            pre_max = max;                
        } else {
            cnt_0++;
            if(cnt_0 > max)
                max = cnt_0;
        }
       
    }
    if(bin[bin.length-1] === '0') return pre_max;
    
    if(cnt_1 < 2) return 0;

    return max;
}
