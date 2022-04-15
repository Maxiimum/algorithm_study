function solution(progresses, speeds) {
    const pg = progresses;
    let answer =[];
    let buffer=1;
    let success =  pg.map((x,i)=>{return Math.ceil((100-x)/speeds[i])});
    let compareDay = success[0];
    
    console.log(success);
    
    for(let i=1; i<success.length; i++){
        
        if(success[i] <= compareDay){
            buffer++;
        } else {
            answer.push(buffer);
            compareDay = success[i];
            buffer=1;
        }
    }
    answer.push(buffer);

    
    return answer;
}
