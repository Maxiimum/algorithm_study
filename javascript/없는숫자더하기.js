function solution(numbers) {
    
    const arr_ten = [0,1,2,3,4,5,6,7,8,9];
    let answer = 0;

    const ans_arr = arr_ten.filter(x=> !numbers.includes(x));
    ans_arr.forEach((x)=> answer+=x);

    return answer;
}
