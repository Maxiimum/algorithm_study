function solution(people, limit) {
    
    
    let answer = 0;
    let first = 0;
    let last = people.length - 1;
    
    people = people.sort((a,b)=>b-a);
    
    while(first<last){
        
        let kg = people[first] + people[last];
        if (kg > limit) {
            first++;
        } else {
            first++;
            last--;
        }
        answer++;
    }
    if (first === last)
        answer++; 
    
    return answer;
    
}
