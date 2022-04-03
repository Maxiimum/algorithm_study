function solution(arr, divisor) {
    let div_arr = [];

    for (let i in arr){
        if (arr[i]%divisor === 0)
            div_arr.push(arr[i]);
    }
    div_arr.sort( (a,b) => {return  a-b;})

    return div_arr.length === 0 ? [-1] : div_arr
}
