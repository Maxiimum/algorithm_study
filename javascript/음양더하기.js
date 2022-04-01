function solution(absolutes, signs) {

    let answer = 0;

    for(let i in absolutes){
        if(!signs[i]){
            absolutes[i] = absolutes[i] * -1;
        }
     }
    absolutes.forEach((x)=> answer +=x);

    return answer;
}
