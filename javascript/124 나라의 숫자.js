function solution(n) {
    let answer = "";
    const otf =['1','2','4'];   
    
    while(n>0){
        if(n%3===0){
            answer = otf[2] + answer;
        }
        if(n%3===1){
            answer = otf[0] + answer;
        } 
        if(n%3===2){
            answer = otf[1] + answer;
        } 
      
        n = Math.floor((n-1)/3);    
       
    }    
    
    return answer;
}
