function solution(s) {
    let answer = s.length;
    
    for(let i=1; i <= Math.floor(s.length/2); i++){
        let cnt = 1;
        let str = "";
        let compare = s.substr(0,i);
        
        for(let j=i; j<=s.length; j+=i){
            let n_compare = s.substr(j,i);
            
            if(compare === n_compare) { cnt++; }
            else {
                if(cnt === 1) { str += compare; }
                else { str = str+cnt+compare; }
                
                cnt=1;
                compare = n_compare;
            }
        }
        if(cnt === 1) { str += compare; }
        else { str = str+cnt+compare; } 
        
        if(answer > str.length) { answer = str.length }
    }
    
    
    return answer;
}
