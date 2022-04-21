function solution(d, budget) {
    let result = 0;
    d.sort( (a,b) => {return a-b});
    for (let i in d){
        budget = budget-d[i];
        result++;
        if(budget < 0) 
            return --result;
        
    }
    return result;
    
}
