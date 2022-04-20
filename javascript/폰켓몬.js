function solution(nums) {
    let answer = 0;
    const arr = [...new Set(nums)];

    arr.length <= nums.length/2
    ? answer = arr.length
    : answer = nums.length/2;
    
    return answer;
}
