function solution(lottos, win_nums) {
    let zero = 0;
    let cnt = 0;
    let min = 6;
    let max = 1;
    let result =[max, min];

    for (let i in lottos){
        if (lottos[i] === 0)
            zero++;
    }

    for (let i in lottos){
        for (let j in win_nums){
            if(lottos[i] === win_nums[j])
                cnt++;
        }
    }
    switch (cnt){
        case 0 : if (zero < 2) max = 6; break;
                 if (zero > 1) min = 6, max = min-zero+1; break;
        case 1 : min = 6, max = min-zero; break;
        case 2 : min = 5, max = min-zero; break;
        case 3 : min = 4, max = min-zero; break;
        case 4 : min = 3, max = min-zero; break;
        case 5 : min = 2, max = min-zero; break;
        case 6 : min = 1, max = min; break;

    }


    return [max,min];
}
